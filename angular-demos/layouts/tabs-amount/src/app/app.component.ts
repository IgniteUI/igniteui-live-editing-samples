import { Component } from "@angular/core";
import { TabsAmountComponent } from "./tabs-amount/tabs-amount.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TabsAmountComponent]
})
export class AppComponent {}