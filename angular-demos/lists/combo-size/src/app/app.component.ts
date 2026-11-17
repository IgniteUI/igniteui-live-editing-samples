import { Component } from "@angular/core";
import { ComboSizeComponent } from "./combo-size/combo-size.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ComboSizeComponent]
})
export class AppComponent {}