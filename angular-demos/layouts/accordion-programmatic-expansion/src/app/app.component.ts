import { Component } from "@angular/core";
import { AccordionProgrammaticExpansionComponent } from "./accordion-programmatic-expansion/accordion-programmatic-expansion.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [AccordionProgrammaticExpansionComponent]
})
export class AppComponent {}