import { Component } from "@angular/core";
import { LayoutAlignItemsComponent } from "./layout/layout-align-items/layout-align-items.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [LayoutAlignItemsComponent]
})
export class AppComponent {}