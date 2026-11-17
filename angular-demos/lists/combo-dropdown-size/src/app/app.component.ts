import { Component } from "@angular/core";
import { ComboDropdownSizeComponent } from "./combo-dropdown-size/combo-dropdown-size.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ComboDropdownSizeComponent]
})
export class AppComponent {}