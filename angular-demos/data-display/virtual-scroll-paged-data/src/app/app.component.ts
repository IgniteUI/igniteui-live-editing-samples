import { Component } from "@angular/core";
import { VirtualScrollPagedDataComponent } from "./virtual-scroll/virtual-scroll-paged-data/virtual-scroll-paged-data.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [VirtualScrollPagedDataComponent]
})
export class AppComponent {}