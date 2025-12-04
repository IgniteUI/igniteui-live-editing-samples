import { Component } from "@angular/core";
import { ToastSample2Component } from "./toast-sample-2/toast-sample-2.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ToastSample2Component]
})
export class AppComponent {}