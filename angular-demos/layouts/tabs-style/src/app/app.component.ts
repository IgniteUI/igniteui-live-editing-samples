import { Component } from "@angular/core";
import { TabsStyleComponent } from "./tabs-style/tabs-style.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TabsStyleComponent]
})
export class AppComponent {}