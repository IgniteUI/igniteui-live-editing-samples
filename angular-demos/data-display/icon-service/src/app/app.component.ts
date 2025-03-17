import { Component } from "@angular/core";
import { IconServiceSampleComponent } from "./icon-service-sample/icon-service-sample.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [IconServiceSampleComponent]
})
export class AppComponent {}