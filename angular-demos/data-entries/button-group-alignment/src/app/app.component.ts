import { Component } from "@angular/core";
import { ButtonGroupAlignmentComponent } from "./button-group-alignment/button-group-alignment.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ButtonGroupAlignmentComponent]
})
export class AppComponent {}