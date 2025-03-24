import { Component } from "@angular/core";
import { BannerSample1Component } from "./banner-sample-1/banner-sample-1.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [BannerSample1Component]
})
export class AppComponent {}