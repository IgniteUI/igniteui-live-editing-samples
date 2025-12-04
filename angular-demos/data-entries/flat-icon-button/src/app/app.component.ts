import { Component } from "@angular/core";
import { FlatIconButtonComponent } from "./flat-icon-button/flat-icon-button.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [FlatIconButtonComponent]
})
export class AppComponent {}