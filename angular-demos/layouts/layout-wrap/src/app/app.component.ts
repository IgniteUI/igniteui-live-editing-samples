import { Component } from "@angular/core";
import { LayoutWrapComponent } from "./layout/layout-wrap/layout-wrap.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [LayoutWrapComponent]
})
export class AppComponent {}