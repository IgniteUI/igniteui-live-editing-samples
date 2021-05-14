import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxBannerComponent } from 'igniteui-angular';

@Component({
    selector: 'app-banner-sample-1',
    styleUrls: ['../banner-samples.scss'],
    templateUrl: 'banner-sample-1.component.html'
})

export class BannerSample1Component implements OnInit {
    @ViewChild(IgxBannerComponent, { static: true }) public banner: IgxBannerComponent;
    public contentWidth = '384px';
    public imageUrls = ['https://www.infragistics.com/angular-demos/assets/images/card/media/the_red_ice_forest.jpg',
        'https://www.infragistics.com/angular-demos/assets/images/card/media/yosemite.jpg'];
    public ngOnInit() {
        this.banner.open();
    }
}
