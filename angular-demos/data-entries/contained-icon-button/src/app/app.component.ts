import { Component } from "@angular/core";
import { ContainedIconButtonComponent } from "./contained-icon-button/contained-icon-button.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ContainedIconButtonComponent]
})
export class AppComponent {}