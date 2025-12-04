import { Component } from "@angular/core";
import { RadioSample2Component } from "./radio-sample-2/radio-sample-2.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [RadioSample2Component]
})
export class AppComponent {}