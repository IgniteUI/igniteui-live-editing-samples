import { Component } from "@angular/core";
import { IgxForComponent } from "./igxFor/igxFor.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [IgxForComponent]
})
export class AppComponent {}