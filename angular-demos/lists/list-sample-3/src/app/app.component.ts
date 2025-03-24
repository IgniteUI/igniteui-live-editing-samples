import { Component } from "@angular/core";
import { ListSample3Component } from "./list-sample-3/list-sample-3.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ListSample3Component]
})
export class AppComponent {}