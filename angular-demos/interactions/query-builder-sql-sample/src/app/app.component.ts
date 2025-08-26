import { Component } from "@angular/core";
import { QueryBuilderSqlSampleComponent } from "./query-builder-sql-sample/query-builder-sql-sample.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [QueryBuilderSqlSampleComponent]
})
export class AppComponent {}