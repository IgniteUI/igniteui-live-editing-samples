import { Component } from "@angular/core";
import { HGridEditingLifecycleComponent } from "./hierarchical-grid/hgrid-editing-lifecycle-sample/hgrid-editing-lifecycle.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [HGridEditingLifecycleComponent]
})
export class AppComponent {}