import { Component } from "@angular/core";
import { SnackbarSample1Component } from "./snackbar-sample-1/snackbar-sample-1.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [SnackbarSample1Component]
})
export class AppComponent {}