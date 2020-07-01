import { Component } from "@angular/core";

@Component({
  selector: "app-carousel",
  styleUrls: ["./carousel.component.css"],
  templateUrl: "./carousel.component.html"
})

export class CarouselComponent {

  public slides = [
      {
        src: "https://staging.infragistics.com/angular-demos/assets/images/carousel/ignite-ui-angular-indigo-design.png"
      },
      {
        src: "https://staging.infragistics.com/angular-demos/assets/images/carousel/slider-image-chart.png"
      },
      {
        src: "https://staging.infragistics.com/angular-demos/assets/images/carousel/ignite-ui-angular-charts.png"
      }
  ];
}
