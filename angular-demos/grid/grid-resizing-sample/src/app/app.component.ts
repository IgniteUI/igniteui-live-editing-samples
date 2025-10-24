import { Component } from "@angular/core";
import { ResizingSampleComponent } from "./grid/grid-resizing-sample/grid-resizing-sample.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ResizingSampleComponent]
})
export class AppComponent {}