import { Component } from "@angular/core";
import { SnackbarSample2Component } from "./snackbar-sample-2/snackbar-sample-2.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [SnackbarSample2Component]
})
export class AppComponent {}