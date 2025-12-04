import { Component } from "@angular/core";
import { DragDialogSampleComponent } from "./drag-drop/dialog-sample/drag-dialog-sample.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [DragDialogSampleComponent]
})
export class AppComponent {}