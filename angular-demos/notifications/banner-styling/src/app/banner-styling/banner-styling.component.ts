import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { IgxBannerComponent, IgxToastComponent, VerticalAlignment, IgxNavbarComponent, IgxIconComponent, IgxBannerActionsDirective, IgxButtonDirective, IgxRippleDirective, IgxCardComponent } from 'igniteui-angular';
import { slideInLeft, slideOutRight } from 'igniteui-angular/animations';
import { Subject } from 'rxjs';

@Component({
    selector: 'app-banner-styling',
    styleUrls: ['banner-styling.component.scss', '../banner-samples.scss'],
    templateUrl: 'banner-styling.component.html',
    encapsulation: ViewEncapsulation.None,
    imports: [IgxNavbarComponent, IgxIconComponent, IgxBannerComponent, IgxBannerActionsDirective, IgxButtonDirective, IgxRippleDirective, IgxCardComponent, IgxToastComponent]
})

export class BannerStylingComponent implements OnInit, OnDestroy {
    @ViewChild(IgxBannerComponent, { static: true }) public banner: IgxBannerComponent;
    @ViewChild(IgxToastComponent, { static: true }) public eventToast: IgxToastComponent;
    public contentWidth = '384px';
    public imageUrls = ['https://staging.infragistics.com/angular-demos/assets/images/card/media/the_red_ice_forest.jpg',
        'https://staging.infragistics.com/angular-demos/assets/images/card/media/yosemite.jpg'];
    public animationSettings = {
        closeAnimation: slideOutRight,
        openAnimation: slideInLeft
    };
    public onNetworkStateChange = new Subject<void>();
    private _wifiState = false;

    public get wifiState(): boolean {
        return this._wifiState;
    }
    public set wifiState(v: boolean) {
        this._wifiState = v;
        this.onNetworkStateChange.next();
    }

    public showToast() {
        this.eventToast.close();
        this.eventToast.positionSettings.verticalDirection = VerticalAlignment.Middle;
        this.eventToast.open(`Wifi is now ${this.wifiState ? 'on' : 'off'}`);
    }

    public ngOnInit() {
        this.banner.open();
        this.onNetworkStateChange.subscribe(() => this.refreshBanner());
    }

    public ngOnDestroy(): void {
        this.onNetworkStateChange.complete();
    }

    public refreshBanner() {
        if (!this.wifiState) {
            this.banner.open();
        } else {
            this.banner.close();
        }
        this.showToast();
    }
}
