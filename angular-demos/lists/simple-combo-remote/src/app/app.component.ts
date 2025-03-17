import { Component } from "@angular/core";
import { SimpleComboRemoteComponent } from "./lists/combo/simple-combo-remote/simple-combo-remote.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [SimpleComboRemoteComponent]
})
export class AppComponent {}