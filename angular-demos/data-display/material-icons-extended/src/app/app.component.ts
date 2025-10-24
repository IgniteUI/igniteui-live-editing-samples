import { Component } from "@angular/core";
import { MaterialIconsExtendedComponent } from "./material-icons-extended/material-icons-extended.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [MaterialIconsExtendedComponent]
})
export class AppComponent {}