import { Component } from "@angular/core";
import { TabsSample1Component } from "./tabs-sample-1/tabs-sample-1.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TabsSample1Component]
})
export class AppComponent {}