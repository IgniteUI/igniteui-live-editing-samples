import { Component } from "@angular/core";
import { SINGERS } from "../data";

@Component({
    selector: "hierarchical-grid-advanced-filtering-style",
    styleUrls: ["./hierarchical-grid-advanced-filtering-style.component.scss"],
    templateUrl: "hierarchical-grid-advanced-filtering-style.component.html"
})

export class HGridAdvancedFilteringStyleComponent {
    public localdata;

    constructor() {
        this.localdata = SINGERS;
    }

    public formatter = (a) => a;
}
