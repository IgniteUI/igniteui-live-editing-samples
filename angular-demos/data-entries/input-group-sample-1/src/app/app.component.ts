import { Component } from "@angular/core";
import { InputGroupSample1Component } from "./input-group-sample-1/input-group-sample-1.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [InputGroupSample1Component]
})
export class AppComponent {}