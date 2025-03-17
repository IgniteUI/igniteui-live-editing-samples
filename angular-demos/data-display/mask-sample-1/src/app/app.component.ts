import { Component } from "@angular/core";
import { MaskSample1Component } from "./mask-sample-1/mask-sample-1.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [MaskSample1Component]
})
export class AppComponent {}