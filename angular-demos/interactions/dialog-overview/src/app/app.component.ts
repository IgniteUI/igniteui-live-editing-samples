import { Component } from "@angular/core";
import { DialogOverviewComponent } from "./dialog-overview/dialog-overview.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [DialogOverviewComponent]
})
export class AppComponent {}