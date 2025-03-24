import { Component } from "@angular/core";
import { ButtonGroupSample2Component } from "./button-group-sample-2/button-group-sample-2.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ButtonGroupSample2Component]
})
export class AppComponent {}