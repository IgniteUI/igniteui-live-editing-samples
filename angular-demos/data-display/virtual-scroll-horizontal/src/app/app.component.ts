import { Component } from "@angular/core";
import { VirtualScrollHorizontalComponent } from "./virtual-scroll/virtual-scroll-horizontal/virtual-scroll-horizontal.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [VirtualScrollHorizontalComponent]
})
export class AppComponent {}