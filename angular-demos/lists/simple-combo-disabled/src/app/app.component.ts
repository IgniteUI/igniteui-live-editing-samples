import { Component } from "@angular/core";
import { SimpleComboDisabledComponent } from "./simple-combo-disabled/simple-combo-disabled.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [SimpleComboDisabledComponent]
})
export class AppComponent {}