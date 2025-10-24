import { Component } from "@angular/core";
import { TextHighlightStyleComponent } from "./text-highlight-style/text-highlight-style.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TextHighlightStyleComponent]
})
export class AppComponent {}