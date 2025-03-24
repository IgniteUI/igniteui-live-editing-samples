import { Component } from "@angular/core";
import { CircularProgressbarComponent } from "./circular-progressbar/circular-progressbar.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [CircularProgressbarComponent]
})
export class AppComponent {}