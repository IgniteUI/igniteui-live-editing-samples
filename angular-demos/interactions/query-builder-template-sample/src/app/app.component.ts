import { Component } from "@angular/core";
import { QueryBuilderTemplateSampleComponent } from "./query-builder-template-sample/query-builder-template-sample.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [QueryBuilderTemplateSampleComponent]
})
export class AppComponent {}