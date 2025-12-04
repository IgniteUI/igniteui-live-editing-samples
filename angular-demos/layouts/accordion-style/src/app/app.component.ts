import { Component } from "@angular/core";
import { AccordionStyleComponent } from "./accordion-style/accordion-style.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [AccordionStyleComponent]
})
export class AppComponent {}