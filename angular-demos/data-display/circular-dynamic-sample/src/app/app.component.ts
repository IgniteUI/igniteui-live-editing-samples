import { Component } from "@angular/core";
import { CircularDynamicSampleComponent } from "./circular-progressbar/circular-dynamic-sample/circular-dynamic-sample.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [CircularDynamicSampleComponent]
})
export class AppComponent {}