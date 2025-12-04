import { Component } from "@angular/core";
import { TGridEditingLifecycleComponent } from "./tgrid-editing-lifecycle-sample/tgrid-editing-lifecycle.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TGridEditingLifecycleComponent]
})
export class AppComponent {}