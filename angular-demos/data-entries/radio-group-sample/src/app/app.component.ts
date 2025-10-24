import { Component } from "@angular/core";
import { RadioGroupSampleComponent } from "./radio-group-sample/radio-group-sample.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [RadioGroupSampleComponent]
})
export class AppComponent {}