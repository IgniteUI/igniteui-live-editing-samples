import { Component } from "@angular/core";
import { CheckboxOverviewComponent } from "./checkbox-overview/checkbox-overview.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [CheckboxOverviewComponent]
})
export class AppComponent {}