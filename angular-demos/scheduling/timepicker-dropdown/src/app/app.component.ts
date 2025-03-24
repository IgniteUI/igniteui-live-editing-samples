import { Component } from "@angular/core";
import { TimepickerDropdownComponent } from "./timepicker-dropdown/timepicker-dropdown.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TimepickerDropdownComponent]
})
export class AppComponent {}