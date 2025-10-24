import { Component } from "@angular/core";
import { BannerAdvancedSampleComponent } from "./banner-advanced-sample/banner-advanced-sample.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [BannerAdvancedSampleComponent]
})
export class AppComponent {}