import { Component } from "@angular/core";
import { RadioStylingSampleComponent } from "./radio-styling-sample/radio-styling-sample.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [RadioStylingSampleComponent]
})
export class AppComponent {}