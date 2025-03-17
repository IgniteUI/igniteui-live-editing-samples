import { Component } from "@angular/core";
import { DatepickerDropdownComponent } from "./scheduling/datepicker/datepicker-dropdown/datepicker-dropdown.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [DatepickerDropdownComponent]
})
export class AppComponent {}