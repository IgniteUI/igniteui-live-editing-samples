import { Component } from "@angular/core";
import { ListComponent } from "./list/list.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ListComponent]
})
export class AppComponent {}