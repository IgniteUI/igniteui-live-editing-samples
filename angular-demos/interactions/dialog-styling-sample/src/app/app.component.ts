import { Component } from "@angular/core";
import { DialogStylingSampleComponent } from "./dialog/dialog-styling-sample/dialog-styling-sample.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [DialogStylingSampleComponent]
})
export class AppComponent {}