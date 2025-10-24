import { Component } from "@angular/core";
import { LayoutCustomOrderComponent } from "./layout/layout-custom-order/layout-custom-order.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [LayoutCustomOrderComponent]
})
export class AppComponent {}