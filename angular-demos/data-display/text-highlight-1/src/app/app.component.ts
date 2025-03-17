import { Component } from "@angular/core";
import { TextHighlightSample1Component } from "./text-highlight-sample-1/text-highlight-sample-1.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TextHighlightSample1Component]
})
export class AppComponent {}