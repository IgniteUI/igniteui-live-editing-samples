import { Component } from "@angular/core";
import { SnackbarStyleComponent } from "./snackbar-style/snackbar-style.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [SnackbarStyleComponent]
})
export class AppComponent {}