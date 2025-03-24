import { Component } from "@angular/core";
import { InputGroupStyleComponent } from "./input-group/input-group-styling/input-group-styling.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [InputGroupStyleComponent]
})
export class AppComponent {}