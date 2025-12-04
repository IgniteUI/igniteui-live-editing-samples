import { Component } from "@angular/core";
import { ActionStripParagraphComponent } from "./action-strip-paragraph/action-strip-paragraph.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ActionStripParagraphComponent]
})
export class AppComponent {}