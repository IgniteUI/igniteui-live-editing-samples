import { Component } from "@angular/core";
import { ToastSample1Component } from "./toast-sample-1/toast-sample-1.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ToastSample1Component]
})
export class AppComponent {}