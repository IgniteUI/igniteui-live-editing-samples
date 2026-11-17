import { Component } from "@angular/core";
import { SimpleComboTypeComponent } from "./simple-combo-type/simple-combo-type.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [SimpleComboTypeComponent]
})
export class AppComponent {}