import { Component } from "@angular/core";
import { BannerSample2Component } from "./banner-sample-2/banner-sample-2.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [BannerSample2Component]
})
export class AppComponent {}