import { Component } from "@angular/core";
import { SimpleComboUsageComponent } from "./lists/combo/simple-combo-usage/simple-combo-usage.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [SimpleComboUsageComponent]
})
export class AppComponent {}