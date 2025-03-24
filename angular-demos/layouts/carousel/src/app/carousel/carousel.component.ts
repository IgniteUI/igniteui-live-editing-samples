import { Component } from '@angular/core';
import { IgxCarouselComponent, IgxSlideComponent } from 'igniteui-angular';


@Component({
    selector: 'app-carousel',
    styleUrls: ['./carousel.component.scss'],
    templateUrl: './carousel.component.html',
    imports: [IgxCarouselComponent, IgxSlideComponent]
})

export class CarouselComponent {

  public slides = [
      {
        src: 'https://staging.infragistics.com/angular-demos/assets/images/carousel/ignite-ui-angular-indigo-design.png'
      },
      {
        src: 'https://staging.infragistics.com/angular-demos/assets/images/carousel/slider-image-chart.png'
      },
      {
        src: 'https://staging.infragistics.com/angular-demos/assets/images/carousel/ignite-ui-angular-charts.png'
      }
  ];
}
