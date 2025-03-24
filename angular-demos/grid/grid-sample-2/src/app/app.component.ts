import { Component } from "@angular/core";
import { FinancialSampleComponent } from "./grid/grid-sample-2/grid-sample-2.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [FinancialSampleComponent]
})
export class AppComponent {}