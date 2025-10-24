import { Component } from "@angular/core";
import { LayoutContentSpaceComponent } from "./layout/layout-content-space/layout-content-space.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [LayoutContentSpaceComponent]
})
export class AppComponent {}