import { Component } from "@angular/core";
import { ShadowsSampleComponent } from "./shadows-sample-1/shadows-sample.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ShadowsSampleComponent]
})
export class AppComponent {}