import { Component } from "@angular/core";
import { DividerInsetComponent } from "./inset/divider-inset.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [DividerInsetComponent]
})
export class AppComponent {}