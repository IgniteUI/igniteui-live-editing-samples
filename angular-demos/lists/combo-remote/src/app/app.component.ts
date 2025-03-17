import { Component } from "@angular/core";
import { ComboRemoteComponent } from "./lists/combo/combo-remote/combo-remote.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ComboRemoteComponent]
})
export class AppComponent {}