import { Component } from "@angular/core";
import { TreeAdvancedSampleComponent } from "./lists/tree/tree-advanced-sample/tree-advanced-sample.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TreeAdvancedSampleComponent]
})
export class AppComponent {}