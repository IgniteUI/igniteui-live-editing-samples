import { Component } from "@angular/core";
import { CustomRemotePagingGridSampleComponent } from "./grid/grid-custom-remote-paging-sample/custom-remote-paging-sample.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [CustomRemotePagingGridSampleComponent]
})
export class AppComponent {}