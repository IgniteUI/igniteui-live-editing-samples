import { Component } from "@angular/core";
import { VirtualScrollInfiniteScrollComponent } from "./virtual-scroll/virtual-scroll-infinite-scroll/virtual-scroll-infinite-scroll.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [VirtualScrollInfiniteScrollComponent]
})
export class AppComponent {}