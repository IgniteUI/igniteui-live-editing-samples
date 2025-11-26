import { Component } from "@angular/core";
import { TreeGridFinJSComponent } from "./treegrid-finjs/tree-grid-finjs-sample.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TreeGridFinJSComponent]
})
export class AppComponent {}