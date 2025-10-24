import { Component } from "@angular/core";
import { MaskSample2Component } from "./mask-sample-2/mask-sample-2.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [MaskSample2Component]
})
export class AppComponent {}