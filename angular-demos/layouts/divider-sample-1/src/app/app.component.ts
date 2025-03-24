import { Component } from "@angular/core";
import { DividerDefaultComponent } from "./default/divider-default.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [DividerDefaultComponent]
})
export class AppComponent {}