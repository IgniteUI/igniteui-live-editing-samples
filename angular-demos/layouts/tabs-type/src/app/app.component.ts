import { Component } from "@angular/core";
import { TabsTypeComponent } from "./tabs-type/tabs-type.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TabsTypeComponent]
})
export class AppComponent {}