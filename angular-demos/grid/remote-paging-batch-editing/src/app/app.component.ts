import { Component } from "@angular/core";
import { RemotePagingBatchEditingComponent } from "./grid/grid-batchEditing-remotePaging/batch-editing-remote-paging.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [RemotePagingBatchEditingComponent]
})
export class AppComponent {}