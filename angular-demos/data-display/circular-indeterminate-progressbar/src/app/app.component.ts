import { Component } from "@angular/core";
import { CircularIndeterminateProgressbarComponent } from "./circular-indeterminate-progressbar/circular-indeterminate-progressbar.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [CircularIndeterminateProgressbarComponent]
})
export class AppComponent {}