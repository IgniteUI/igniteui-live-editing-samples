import { Component } from "@angular/core";
import { BannerStylingComponent } from "./banner-styling/banner-styling.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [BannerStylingComponent]
})
export class AppComponent {}