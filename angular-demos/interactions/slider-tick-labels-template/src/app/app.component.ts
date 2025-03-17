import { Component } from "@angular/core";
import { TickLabelsTemplateComponent } from "./slider-tick-labels-template/tick-labels-template.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TickLabelsTemplateComponent]
})
export class AppComponent {}