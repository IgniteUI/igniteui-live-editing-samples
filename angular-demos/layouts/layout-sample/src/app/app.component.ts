import { Component } from "@angular/core";
import { LayoutSampleComponent } from "./layout/layout-sample/layout-sample.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [LayoutSampleComponent]
})
export class AppComponent {}