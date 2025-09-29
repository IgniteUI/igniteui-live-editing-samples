import { Component } from "@angular/core";
import { TailwindSampleComponent } from "./tailwind-sample.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TailwindSampleComponent]
})
export class AppComponent {}