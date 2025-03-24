import { Component } from "@angular/core";
import { ComboMainComponent } from "./combo-main/combo-main.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ComboMainComponent]
})
export class AppComponent {}