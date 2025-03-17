import { Component } from "@angular/core";
import { BannerSample3Component } from "./banner-sample-3/banner-sample-3.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [BannerSample3Component]
})
export class AppComponent {}