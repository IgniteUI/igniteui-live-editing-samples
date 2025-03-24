import { Component } from "@angular/core";
import { ListSample2Component } from "./list-sample-2/list-sample-2.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ListSample2Component]
})
export class AppComponent {}