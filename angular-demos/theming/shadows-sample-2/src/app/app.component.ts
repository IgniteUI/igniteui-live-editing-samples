import { Component } from "@angular/core";
import { ShadowsSample2Component } from "./shadows-sample-2/shadows-sample-2.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ShadowsSample2Component]
})
export class AppComponent {}