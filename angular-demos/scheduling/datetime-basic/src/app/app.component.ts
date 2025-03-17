import { Component } from "@angular/core";
import { DateTimeBasicComponent } from "./datetime-basic/datetime-basic.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [DateTimeBasicComponent]
})
export class AppComponent {}