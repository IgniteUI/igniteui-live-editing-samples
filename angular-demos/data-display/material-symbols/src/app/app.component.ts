import { Component } from "@angular/core";
import { MaterialSymbolsComponent } from "./data-display/icon/material-symbols/material-symbols.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [MaterialSymbolsComponent]
})
export class AppComponent {}