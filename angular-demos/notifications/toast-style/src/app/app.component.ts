import { Component } from "@angular/core";
import { ToastStyleComponent } from "./toast-style/toast-style.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ToastStyleComponent]
})
export class AppComponent {}