import { Component } from "@angular/core";
import { DropDownRemoteComponent } from "./data-entries/dropdown/drop-down-remote-virtual/drop-down-remote.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [DropDownRemoteComponent]
})
export class AppComponent {}