import { Component } from "@angular/core";
import { BadgeSample2Component } from "./badge-sample-2/badge-sample-2.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [BadgeSample2Component]
})
export class AppComponent {}