import { Component } from "@angular/core";
import { ButtonsSample1Component } from "./buttons-sample-1/buttons-sample-1.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ButtonsSample1Component]
})
export class AppComponent {}