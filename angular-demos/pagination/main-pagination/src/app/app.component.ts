import { Component } from "@angular/core";
import { PaginationSampleComponent } from "./pagination/paginator/pagination-sample.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [PaginationSampleComponent]
})
export class AppComponent {}