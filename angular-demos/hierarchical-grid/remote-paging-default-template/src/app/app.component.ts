import { Component } from "@angular/core";
import { HGridRemotePagingDefaultTemplateComponent } from "./hierarchical-grid/hierarchical-grid-remote-paging-default-template/hierarchical-grid-remote-paging-default-template.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [HGridRemotePagingDefaultTemplateComponent]
})
export class AppComponent {}