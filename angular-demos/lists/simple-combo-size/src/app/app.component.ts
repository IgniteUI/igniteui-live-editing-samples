import { Component } from "@angular/core";
import { SimpleComboSizeComponent } from "./simple-combo-size/simple-combo-size.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [SimpleComboSizeComponent]
})
export class AppComponent {}