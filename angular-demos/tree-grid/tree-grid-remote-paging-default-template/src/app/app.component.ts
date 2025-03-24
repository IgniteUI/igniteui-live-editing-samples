import { Component } from "@angular/core";
import { TreeGridRemotePagingDefaultTemplateComponent } from "./tree-grid-remote-paging-default-template/tree-grid-remote-paging-default-template.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TreeGridRemotePagingDefaultTemplateComponent]
})
export class AppComponent {}