import { Component } from "@angular/core";
import { SelectSample1Component } from "./select-sample-1/select-sample-1.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [SelectSample1Component]
})
export class AppComponent {}