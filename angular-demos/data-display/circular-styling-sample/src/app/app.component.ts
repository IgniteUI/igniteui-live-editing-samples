import { Component } from "@angular/core";
import { CircularStylingSampleComponent } from "./circular-styling-sample/circular-styling-sample.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [CircularStylingSampleComponent]
})
export class AppComponent {}