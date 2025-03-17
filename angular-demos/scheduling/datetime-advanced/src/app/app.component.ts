import { Component } from "@angular/core";
import { DateTimeAdvancedComponent } from "./datetime-advanced/datetime-advanced";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [DateTimeAdvancedComponent]
})
export class AppComponent {}