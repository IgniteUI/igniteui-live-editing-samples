import { Component } from "@angular/core";
import { ToastSample3Component } from "./toast-sample-3/toast-sample-3.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ToastSample3Component]
})
export class AppComponent {}