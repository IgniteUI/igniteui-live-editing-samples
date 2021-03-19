import { HttpClient } from '@angular/common/http';
import { Injectable, NgZone, OnDestroy } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { BehaviorSubject } from 'rxjs';
import { FinancialData } from './financialData';

@Injectable({
    providedIn: 'root'
})
export class SignalRService implements OnDestroy {
    public data: BehaviorSubject<any[]>;
    public hasRemoteConnection: boolean;
    private hubConnection: signalR.HubConnection;
    private financialData: FinancialData = new FinancialData();
    private _timer;

    constructor(private zone: NgZone, private http: HttpClient) {
        this.data = new BehaviorSubject([]);
    }

    public ngOnDestroy() {
        this.stopLiveData();
    }

    public startConnection = (interval = 500, volume = 1000, live = false) => {
        this.hubConnection = new signalR.HubConnectionBuilder()
            .configureLogging(signalR.LogLevel.Trace)
            .withUrl('https://staging.infragistics.com/angular-apis/webapi/streamHub')
            .build();
        this.hubConnection
            .start()
            .then(() => {
                this.hasRemoteConnection = true;
                this.registerSignalEvents();
                this.broadcastParams(interval, volume, live);
            })
            .catch(() => {
                this.hasRemoteConnection = false;
                live ? this._timer = setInterval(() => this.updateAllPriceValues(this.financialData.generateData(volume))) : this.getData(volume);
            });
    }

    public broadcastParams = (frequency, volume, live) => {
        this.hubConnection.invoke('updateparameters', frequency, volume, live)
            .then(() => console.log('requestLiveData', volume))
            .catch(err => {
                console.error(err);
            });
    }

    public stopLiveData = () => {
        if (this.hasRemoteConnection) {
            this.hubConnection.invoke('StopTimer')
            .catch(err => console.error(err));
        } else {
            this.stopFeed();
        }
    }

    private stopFeed() {
        if (this._timer) {
            clearInterval(this._timer);
        }
    }

    private registerSignalEvents() {
        this.hubConnection.onclose(() => {
            this.hasRemoteConnection = false;
        });
        this.hubConnection.on('transferdata', (data) => {
            this.data.next(data);
        })
    }

    public getData(count: number = 10) {
        this.data.next(this.financialData.generateData(count));
    }

    public updateAllPriceValues(data) {
        this.zone.runOutsideAngular(() =>  {
            const newData = this.financialData.updateAllPrices(data);
            this.data.next(newData);
        });
    }

    public updateRandomPriceValues(data) {
        this.zone.runOutsideAngular(() =>  {
            const newData = this.financialData.updateRandomPrices(data);
            this.data.next(newData);
        });
    }
}