import { Component } from "@angular/core";
import { DialogSample2Component } from "./dialog-sample-2/dialog-sample-2.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [DialogSample2Component]
})
export class AppComponent {}