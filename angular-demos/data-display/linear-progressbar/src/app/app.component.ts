import { Component } from "@angular/core";
import { LinearProgressbarComponent } from "./linear-progressbar/linear-progressbar.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [LinearProgressbarComponent]
})
export class AppComponent {}