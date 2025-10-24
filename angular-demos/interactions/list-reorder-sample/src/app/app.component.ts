import { Component } from "@angular/core";
import { ListReorderSampleComponent } from "./drag-drop/list-reorder-sample/list-reorder-sample.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ListReorderSampleComponent]
})
export class AppComponent {}