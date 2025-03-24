import { Component } from "@angular/core";
import { CheckboxSample2Component } from "./checkbox-sample-2/checkbox-sample-2.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [CheckboxSample2Component]
})
export class AppComponent {}