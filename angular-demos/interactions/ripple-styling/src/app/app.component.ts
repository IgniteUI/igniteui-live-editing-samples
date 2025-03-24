import { Component } from "@angular/core";
import { RippleStylingSampleComponent } from "./ripple-stying/ripple-styling-sample.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [RippleStylingSampleComponent]
})
export class AppComponent {}