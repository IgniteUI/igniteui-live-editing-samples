import { Component } from "@angular/core";
import { IconsSampleComponent } from "./drag-drop/icons-sample/icons-sample.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [IconsSampleComponent]
})
export class AppComponent {}