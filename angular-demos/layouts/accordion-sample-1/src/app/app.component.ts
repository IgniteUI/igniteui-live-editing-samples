import { Component } from "@angular/core";
import { AccordionSample1Component } from "./accordion-sample-1/accordion-sample-1.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [AccordionSample1Component]
})
export class AppComponent {}