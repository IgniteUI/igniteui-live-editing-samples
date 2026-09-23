import { Component } from "@angular/core";
import { VirtualScrollVariableSizeComponent } from "./virtual-scroll/virtual-scroll-variable-size/virtual-scroll-variable-size.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [VirtualScrollVariableSizeComponent]
})
export class AppComponent {}