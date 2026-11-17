import { Component } from "@angular/core";
import { ComboTypeComponent } from "./combo-type/combo-type.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ComboTypeComponent]
})
export class AppComponent {}