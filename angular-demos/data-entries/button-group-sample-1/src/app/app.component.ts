import { Component } from "@angular/core";
import { ButtonGroupSample1Component } from "./button-group-sample-1/button-group-sample-1.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ButtonGroupSample1Component]
})
export class AppComponent {}