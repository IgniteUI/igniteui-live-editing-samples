import { Component } from "@angular/core";
import { DropdownMenuComponent } from "./dropdown-menu/dropdown-menu.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [DropdownMenuComponent]
})
export class AppComponent {}