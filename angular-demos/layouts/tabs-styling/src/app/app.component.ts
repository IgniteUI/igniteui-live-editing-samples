import { Component } from "@angular/core";
import { TabsStylingComponent } from "./tabs-styling/tabs-styling.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TabsStylingComponent]
})
export class AppComponent {}