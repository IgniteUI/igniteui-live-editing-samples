import { Component } from "@angular/core";
import { GridKeyboardnavGuide } from "./grid/grid-keyboardnav-guide-sample/grid-keyboardnav-sample.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridKeyboardnavGuide]
})
export class AppComponent {}