import { Component } from "@angular/core";
import { DefaultThemeSampleComponent } from "./default-theme-sample/default-theme-sample.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [DefaultThemeSampleComponent]
})
export class AppComponent {}