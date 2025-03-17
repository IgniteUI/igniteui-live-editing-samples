import { Component } from "@angular/core";
import { CheckboxSample1Component } from "./checkbox-sample-1/checkbox-sample-1.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [CheckboxSample1Component]
})
export class AppComponent {}