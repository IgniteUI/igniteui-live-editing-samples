import { Component } from "@angular/core";
import { EmailSampleComponent } from "./drag-drop/email-sample/email-sample.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [EmailSampleComponent]
})
export class AppComponent {}