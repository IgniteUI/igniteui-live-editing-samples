import { Component } from "@angular/core";
import { ComboSearchInputComponent } from "./combo-search-input/combo-search-input.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ComboSearchInputComponent]
})
export class AppComponent {}