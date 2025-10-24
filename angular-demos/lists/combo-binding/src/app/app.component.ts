import { Component } from "@angular/core";
import { ComboBindingComponent } from "./combo-binding/combo-binding.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ComboBindingComponent]
})
export class AppComponent {}