import { Component } from "@angular/core";
import { TextHighlightSample2Component } from "./text-highlight-sample-2/text-highlight-sample-2.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TextHighlightSample2Component]
})
export class AppComponent {}