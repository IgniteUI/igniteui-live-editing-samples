import { Component } from "@angular/core";
import { DividerVerticalComponent } from "./vertical/divider-vertical.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [DividerVerticalComponent]
})
export class AppComponent {}