import { Component } from "@angular/core";
import { BadgeVariantsComponent } from "./badge-variants/badge-variants.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [BadgeVariantsComponent]
})
export class AppComponent {}