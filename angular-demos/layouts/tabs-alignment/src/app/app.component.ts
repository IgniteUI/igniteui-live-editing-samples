import { Component } from "@angular/core";
import { TabsAlignmentComponent } from "./tabs-alignment/tabs-alignment.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TabsAlignmentComponent]
})
export class AppComponent {}