import { Component } from "@angular/core";
import { ListSample1Component } from "./list-sample-1/list-sample-1.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ListSample1Component]
})
export class AppComponent {}