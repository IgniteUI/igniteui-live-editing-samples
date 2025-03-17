import { Component } from "@angular/core";
import { TreeBasicSampleComponent } from "./lists/tree/tree-basic-sample/tree-basic-sample.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TreeBasicSampleComponent]
})
export class AppComponent {}