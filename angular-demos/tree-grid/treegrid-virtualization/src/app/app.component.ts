import { Component } from "@angular/core";
import { TreeGridVirtualizationSampleComponent } from "./tree-grid-virtualization-sample/tree-grid-virtualization-sample.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TreeGridVirtualizationSampleComponent]
})
export class AppComponent {}