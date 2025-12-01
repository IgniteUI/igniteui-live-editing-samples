import { Component } from "@angular/core";
import { ChatOverviewSampleComponent } from "./overview-sample/overview-sample.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ChatOverviewSampleComponent]
})
export class AppComponent {}