import { Component } from "@angular/core";
import { TabsSample4Component } from "./tabs-sample-4/components/tabs-sample-4.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TabsSample4Component, RouterOutlet]
})
export class AppComponent {}