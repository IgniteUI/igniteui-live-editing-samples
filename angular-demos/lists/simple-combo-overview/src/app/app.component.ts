import { Component } from "@angular/core";
import { SimpleComboOverviewComponent } from "./simple-combo-overview/simple-combo-overview.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [SimpleComboOverviewComponent]
})
export class AppComponent {}