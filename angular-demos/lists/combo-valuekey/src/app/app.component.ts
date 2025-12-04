import { Component } from "@angular/core";
import { ComboValueKeyComponent } from "./combo-valuekey/combo-valuekey.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ComboValueKeyComponent]
})
export class AppComponent {}