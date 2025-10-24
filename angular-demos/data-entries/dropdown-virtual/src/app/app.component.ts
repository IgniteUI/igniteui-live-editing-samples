import { Component } from "@angular/core";
import { DropDownVirtualComponent } from "./drop-down-virtual/drop-down-virtual.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [DropDownVirtualComponent]
})
export class AppComponent {}