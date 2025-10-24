import { Component } from "@angular/core";
import { IconSample1Component } from "./icon-sample-1/icon-sample-1.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [IconSample1Component]
})
export class AppComponent {}