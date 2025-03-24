import { Component } from "@angular/core";
import { GridEditingLifecycleComponent } from "./grid/grid-editing-lifecycle-sample/grid-editing-lifecycle.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridEditingLifecycleComponent]
})
export class AppComponent {}