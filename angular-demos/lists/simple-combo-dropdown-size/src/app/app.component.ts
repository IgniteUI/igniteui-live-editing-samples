import { Component } from "@angular/core";
import { SimpleComboDropdownSizeComponent } from "./simple-combo-dropdown-size/simple-combo-dropdown-size.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [SimpleComboDropdownSizeComponent]
})
export class AppComponent {}