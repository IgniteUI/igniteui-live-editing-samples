import { Component } from "@angular/core";
import { RadioDisabledComponent } from "./radio-disabled/radio-disabled.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [RadioDisabledComponent]
})
export class AppComponent {}