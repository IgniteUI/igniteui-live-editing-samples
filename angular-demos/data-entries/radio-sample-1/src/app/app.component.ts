import { Component } from "@angular/core";
import { RadioSample1Component } from "./radio-sample-1/radio-sample-1.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [RadioSample1Component]
})
export class AppComponent {}