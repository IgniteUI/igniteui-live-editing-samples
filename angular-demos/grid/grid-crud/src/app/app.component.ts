import { Component } from "@angular/core";
import { CRUDSampleComponent } from "./grid/grid-crud-sample/crud-sample.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [CRUDSampleComponent]
})
export class AppComponent {}