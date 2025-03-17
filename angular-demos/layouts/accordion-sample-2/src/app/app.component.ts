import { Component } from "@angular/core";
import { AccordionSample2Component } from "./accordion-sample-2/accordion-sample-2.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [AccordionSample2Component]
})
export class AppComponent {}