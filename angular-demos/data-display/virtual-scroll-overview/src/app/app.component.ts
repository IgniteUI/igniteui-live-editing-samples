import { Component } from "@angular/core";
import { VirtualScrollOverviewComponent } from "./virtual-scroll/virtual-scroll-overview/virtual-scroll-overview.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [VirtualScrollOverviewComponent]
})
export class AppComponent {}