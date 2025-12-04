import { Component } from "@angular/core";
import { DisplayDensityComponent } from "./display-density/display-density.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [DisplayDensityComponent]
})
export class AppComponent {}