import { Component } from "@angular/core";
import { DropDownSample1Component } from "./dropdown-sample-1/dropdown-sample-1.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [DropDownSample1Component]
})
export class AppComponent {}