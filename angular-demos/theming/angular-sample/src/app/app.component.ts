import { Component } from "@angular/core";
import { AngularMaterialComponent } from "./angular-sample.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [AngularMaterialComponent]
})
export class AppComponent {}