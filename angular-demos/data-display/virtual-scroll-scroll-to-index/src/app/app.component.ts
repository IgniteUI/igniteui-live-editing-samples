import { Component } from "@angular/core";
import { VirtualScrollScrollToIndexComponent } from "./virtual-scroll/virtual-scroll-scroll-to-index/virtual-scroll-scroll-to-index.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [VirtualScrollScrollToIndexComponent]
})
export class AppComponent {}