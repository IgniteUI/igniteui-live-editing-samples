import { Component } from "@angular/core";
import { TabbarSample1Component } from "./tabbar-sample-1/tabbar-sample-1.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TabbarSample1Component]
})
export class AppComponent {}