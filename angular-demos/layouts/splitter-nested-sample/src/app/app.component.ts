import { Component } from "@angular/core";
import { SplitterNestedSampleComponent } from "./splitter-nested-sample/splitter-nested-sample.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [SplitterNestedSampleComponent]
})
export class AppComponent {}