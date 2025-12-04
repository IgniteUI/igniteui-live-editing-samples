import { Component } from "@angular/core";
import { ChatFeaturesSampleComponent } from "./features-sample/features-sample.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ChatFeaturesSampleComponent]
})
export class AppComponent {}