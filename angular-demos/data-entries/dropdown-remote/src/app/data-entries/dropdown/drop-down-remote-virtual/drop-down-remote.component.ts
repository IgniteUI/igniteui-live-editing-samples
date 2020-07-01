import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
// tslint:disable-next-line:max-line-length
import { IForOfState, IgxDropDownComponent, IgxForOfDirective, IgxToastComponent, IgxToastPosition } from "igniteui-angular";
import { Subject, Subscription } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { RemoteService } from "../../../grid/services/remote.service";

// tslint:disable:object-literal-sort-keys
@Component({
    providers: [RemoteService],
    selector: "app-drop-down-remote",
    templateUrl: "./drop-down-remote.component.html",
    styleUrls: ["./drop-down-remote.component.scss"]
})
export class DropDownRemoteComponent implements OnInit, OnDestroy {
    @ViewChild("loadingToast", { read: IgxToastComponent, static: true })
    public loadingToast: IgxToastComponent;
    @ViewChild(IgxForOfDirective, { read: IgxForOfDirective, static: true })
    public remoteForDir: IgxForOfDirective<any>;
    @ViewChild("remoteDropDown", { read: IgxDropDownComponent, static: true })
    public remoteDropDown: IgxDropDownComponent;
    public itemHeight = 48;
    public itemsMaxHeight = 320;
    public prevRequest: Subscription;
    public rData: any;
    private destroy$ = new Subject();
    constructor(private remoteService: RemoteService, public cdr: ChangeDetectorRef) { }

    public ngAfterViewInit() {
        const initialState: IForOfState = {
            startIndex: 0, chunkSize: Math.floor(this.itemsMaxHeight / this.itemHeight) + 1
        };
        this.remoteService.getData(initialState, null, (data) => {
            this.remoteForDir.totalItemCount = data["@odata.count"];
        });
        this.remoteForDir.onChunkPreload.pipe(takeUntil(this.destroy$)).subscribe((data) => {
            this.dataLoading(data);
        });
    }

    public dataLoading(evt) {
        if (this.prevRequest) {
            this.prevRequest.unsubscribe();
        }
        this.loadingToast.message = "Loading Remote Data...";
        this.loadingToast.position = IgxToastPosition.Middle;
        this.loadingToast.autoHide = false;
        this.loadingToast.show();
        this.cdr.detectChanges();
        this.prevRequest = this.remoteService.getData(
            evt,
            null,
            (data) => {
                this.remoteForDir.totalItemCount = data["@odata.count"];
                this.loadingToast.hide();
                this.cdr.detectChanges();
            });
    }

    public ngOnInit() {
        this.rData = this.remoteService.remoteData;
    }

    public ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
