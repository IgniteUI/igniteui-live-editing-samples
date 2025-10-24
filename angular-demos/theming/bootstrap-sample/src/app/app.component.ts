import { Component } from "@angular/core";
import { BootstrapComponent } from "./bootstrap-sample.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [BootstrapComponent]
})
export class AppComponent {}