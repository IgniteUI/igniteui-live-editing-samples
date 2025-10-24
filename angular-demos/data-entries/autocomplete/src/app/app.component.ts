import { Component } from "@angular/core";
import { AutocompleteBasicComponent } from "./autocomplete/autocomplete.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [AutocompleteBasicComponent]
})
export class AppComponent {}