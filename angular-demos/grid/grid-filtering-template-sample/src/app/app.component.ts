import { Component } from "@angular/core";
import { FilteringTemplateSampleComponent } from "./grid/grid-filtering-template-sample/grid-filtering-template-sample.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [FilteringTemplateSampleComponent]
})
export class AppComponent {}