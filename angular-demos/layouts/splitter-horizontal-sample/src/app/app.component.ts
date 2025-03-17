import { Component } from "@angular/core";
import { SplitterHorizontalSampleComponent } from "./splitter-horizontal-sample/splitter-horizontal-sample.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [SplitterHorizontalSampleComponent]
})
export class AppComponent {}