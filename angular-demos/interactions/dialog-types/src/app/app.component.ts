import { Component } from "@angular/core";
import { DialogTypesComponent } from "./dialog-types/dialog-types.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [DialogTypesComponent]
})
export class AppComponent {}