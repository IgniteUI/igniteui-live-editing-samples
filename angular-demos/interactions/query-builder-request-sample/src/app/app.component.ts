import { Component } from "@angular/core";
import { QueryBuilderRequestSampleComponent } from "./query-builder-request-sample/query-builder-request-sample.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [QueryBuilderRequestSampleComponent]
})
export class AppComponent {}