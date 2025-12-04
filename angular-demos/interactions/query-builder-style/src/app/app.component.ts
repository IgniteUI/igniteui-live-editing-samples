import { Component } from "@angular/core";
import { QueryBuilderStyleComponent } from "./query-builder-style/query-builder-style.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [QueryBuilderStyleComponent]
})
export class AppComponent {}