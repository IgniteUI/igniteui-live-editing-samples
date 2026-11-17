import { Component } from "@angular/core";
import { ComboDisabledComponent } from "./combo-disabled/combo-disabled.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ComboDisabledComponent]
})
export class AppComponent {}