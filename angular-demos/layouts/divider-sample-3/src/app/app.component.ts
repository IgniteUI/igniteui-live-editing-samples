import { Component } from "@angular/core";
import { DividerDashedComponent } from "./dashed/divider-dashed.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [DividerDashedComponent]
})
export class AppComponent {}