import { Component } from "@angular/core";
import { SplitterStylingSampleComponent } from "./splitter-styling-sample/splitter-styling-sample.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [SplitterStylingSampleComponent]
})
export class AppComponent {}