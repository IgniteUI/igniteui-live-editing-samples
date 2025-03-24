import { Component } from "@angular/core";
import { QueryBuilderSample1Component } from "./query-builder-sample-1/query-builder-sample-1.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [QueryBuilderSample1Component]
})
export class AppComponent {}