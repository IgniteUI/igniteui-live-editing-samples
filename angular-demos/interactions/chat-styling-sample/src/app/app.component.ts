import { Component } from "@angular/core";
import { ChatStylingSampleComponent } from "./styling-sample/styling-sample.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ChatStylingSampleComponent]
})
export class AppComponent {}