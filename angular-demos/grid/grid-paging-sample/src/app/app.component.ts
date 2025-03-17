import { Component } from "@angular/core";
import { PagingSampleComponent } from "./grid/grid-paging-sample/grid-paging-sample.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [PagingSampleComponent]
})
export class AppComponent {}