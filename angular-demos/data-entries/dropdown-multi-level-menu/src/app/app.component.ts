import { Component } from "@angular/core";
import { DropdownMultiLevelMenuComponent } from "./dropdown-multi-level-menu/dropdown-multi-level-menu.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [DropdownMultiLevelMenuComponent]
})
export class AppComponent {}