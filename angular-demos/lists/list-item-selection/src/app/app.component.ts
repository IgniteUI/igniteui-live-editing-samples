import { Component } from "@angular/core";
import { ListItemSelectionComponent } from "./list-item-selection/list-item-selection.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ListItemSelectionComponent]
})
export class AppComponent {}