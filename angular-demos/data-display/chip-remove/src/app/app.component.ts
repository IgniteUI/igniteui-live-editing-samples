import { Component } from "@angular/core";
import { ChipRemoveComponent } from "./chip/chip-remove/chip-remove.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ChipRemoveComponent]
})
export class AppComponent {}