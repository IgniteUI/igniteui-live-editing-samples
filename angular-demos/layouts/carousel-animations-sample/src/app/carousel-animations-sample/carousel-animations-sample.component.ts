import { Component, ViewChild } from '@angular/core';
import { IgxCarouselComponent, IgxSelectComponent, IgxSelectItemComponent, IgxSlideComponent, IgxCardComponent, IgxCardHeaderComponent, IgxCardHeaderTitleDirective, IgxCardContentDirective, IgxCardMediaDirective, IgxCardActionsComponent, IgxButtonDirective, IgxPrefixDirective, IgxSwitchComponent } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';
import { TitleCasePipe } from '@angular/common';

@Component({
    selector: 'app-carousel',
    styleUrls: ['./carousel-animations-sample.component.scss'],
    templateUrl: './carousel-animations-sample.component.html',
    imports: [IgxSelectComponent, IgxSwitchComponent, FormsModule, IgxSelectItemComponent, IgxCarouselComponent, IgxSlideComponent, IgxCardComponent, IgxCardHeaderComponent, IgxCardHeaderTitleDirective, IgxCardContentDirective, IgxCardMediaDirective, IgxCardActionsComponent, IgxButtonDirective, IgxPrefixDirective, TitleCasePipe]
})
export class CarouselAnimationsSampleComponent {
  @ViewChild('carousel', { static: true }) public carousel: IgxCarouselComponent;

  public animations = ['slide', 'fade', 'none'];
  public slides: any[] = [
    {
        description: '30+ Material-based Angular components to code speedy web apps faster.',
        heading: 'Ignite UI for Angular',
        image: 'https://staging.infragistics.com/angular-demos/assets/images/carousel/slide1-angular.png',
        link: 'https://www.infragistics.com/products/ignite-ui-angular'
      },
      {
        description: 'A complete JavaScript UI library empowering you to build data-rich responsive web apps.',
        heading: 'Ignite UI for Javascript',
        image: 'https://staging.infragistics.com/angular-demos/assets/images/carousel/slide2-ignite.png',
        link: 'https://www.infragistics.com/products/ignite-ui'
      },
      {
        description: 'Build full-featured business apps with the most versatile set of ASP.NET AJAX UI controls',
        heading: 'Ultimate UI for ASP.NET',
        image: 'https://staging.infragistics.com/angular-demos/assets/images/carousel/slide3-aspnet.png',
        link: 'https://www.infragistics.com/products/aspnet'
      }
  ];
}
