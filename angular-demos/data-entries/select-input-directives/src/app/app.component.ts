import { Component } from "@angular/core";
import { SelectInputDirectivesComponent } from "./data-entries/select/select-input-directives/select-input-directives";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [SelectInputDirectivesComponent]
})
export class AppComponent {}