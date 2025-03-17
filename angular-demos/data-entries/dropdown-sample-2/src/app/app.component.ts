import { Component } from "@angular/core";
import { DropDownSample2Component } from "./dropdown-sample-2/dropdown-sample-2.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [DropDownSample2Component]
})
export class AppComponent {}