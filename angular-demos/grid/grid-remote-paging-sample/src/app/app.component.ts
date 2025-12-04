import { Component } from "@angular/core";
import { RemotePagingGridSampleComponent } from "./grid/grid-remote-paging-sample/remote-paging-sample.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [RemotePagingGridSampleComponent]
})
export class AppComponent {}