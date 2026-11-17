import { Component } from "@angular/core";
import { SimpleComboDropdownItemsComponent } from "./simple-combo-dropdown-items/simple-combo-dropdown-items.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [SimpleComboDropdownItemsComponent]
})
export class AppComponent {}