import { Component } from "@angular/core";
import { TabbarSample3Component } from "./tabbar-sample-3/components/tabbar-sample-3.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TabbarSample3Component, RouterOutlet]
})
export class AppComponent {}