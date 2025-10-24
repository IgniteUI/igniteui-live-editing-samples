import { Component } from "@angular/core";
import { KanbanSampleComponent } from "./drag-drop/kanban-sample/kanban-sample.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [KanbanSampleComponent]
})
export class AppComponent {}