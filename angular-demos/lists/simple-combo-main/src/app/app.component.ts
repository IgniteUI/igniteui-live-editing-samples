import { Component } from "@angular/core";
import { SimpleComboMainComponent } from "./lists/combo/simple-combo-main/simple-combo-main.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [SimpleComboMainComponent]
})
export class AppComponent {}