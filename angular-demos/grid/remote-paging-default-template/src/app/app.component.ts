import { Component } from "@angular/core";
import { RemotePagingDefaultTemplateComponent } from "./grid/grid-remote-paging-defaultTemplate-sample/remote-paging-default-template.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [RemotePagingDefaultTemplateComponent]
})
export class AppComponent {}