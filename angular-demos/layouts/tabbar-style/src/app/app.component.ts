import { Component } from "@angular/core";
import { TabbarStyleComponent } from "./tabbar-style/tabbar-style.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TabbarStyleComponent]
})
export class AppComponent {}