import { Component } from "@angular/core";
import { BadgeDotSampleComponent } from "./badge-dot-sample/badge-dot-sample.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [BadgeDotSampleComponent]
})
export class AppComponent {}