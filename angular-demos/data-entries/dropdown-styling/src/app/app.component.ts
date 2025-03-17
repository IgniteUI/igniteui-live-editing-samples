import { Component } from "@angular/core";
import { DropDownStylingComponent } from "./data-entries/dropdown/dropdown-styling/dropdown-styling.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [DropDownStylingComponent]
})
export class AppComponent {}