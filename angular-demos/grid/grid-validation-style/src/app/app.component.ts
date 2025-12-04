import { Component } from "@angular/core";
import { GridValidationStyleComponent } from "./grid/grid-validation-style/grid-validation-style.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridValidationStyleComponent]
})
export class AppComponent {}