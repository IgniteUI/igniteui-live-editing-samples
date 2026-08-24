import { Component } from "@angular/core";
import { ButtonGroupSizeComponent } from "./button-group-size/button-group-size.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ButtonGroupSizeComponent]
})
export class AppComponent {}