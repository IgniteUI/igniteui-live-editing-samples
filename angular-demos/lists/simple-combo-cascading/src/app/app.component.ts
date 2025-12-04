import { Component } from "@angular/core";
import { SimpleComboCascadingComponent } from "./lists/combo/simple-combo-cascading/simple-combo-cascading.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [SimpleComboCascadingComponent]
})
export class AppComponent {}