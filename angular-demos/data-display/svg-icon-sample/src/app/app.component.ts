import { Component } from "@angular/core";
import { SvgIconSampleComponent } from "./svg-icon-sample/svg-icon-sample.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [SvgIconSampleComponent]
})
export class AppComponent {}