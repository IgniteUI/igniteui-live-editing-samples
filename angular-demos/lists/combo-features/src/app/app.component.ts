import { Component } from "@angular/core";
import { ComboFeaturesComponent } from "./combo-features/combo-features.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ComboFeaturesComponent]
})
export class AppComponent {}