import { Component } from "@angular/core";
import { ComboTemplateComponent } from "./combo-template/combo-template.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ComboTemplateComponent]
})
export class AppComponent {}