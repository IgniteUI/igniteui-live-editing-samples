import { Component } from "@angular/core";
import { DialogSample1Component } from "./dialog-sample-1/dialog-sample-1.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [DialogSample1Component]
})
export class AppComponent {}