import { Component } from "@angular/core";
import { QueryBuilderTailwindStyleComponent } from "./query-builder-tailwind-style/query-builder-tailwind-style.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [QueryBuilderTailwindStyleComponent]
})
export class AppComponent {}