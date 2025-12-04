import { Component } from "@angular/core";
import { LinearDynamicSampleComponent } from "./linear-dynamic-sample/linear-dynamic-sample.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [LinearDynamicSampleComponent]
})
export class AppComponent {}