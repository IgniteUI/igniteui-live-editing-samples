import { Component } from "@angular/core";
import { GridMRLCustomNavigationComponent } from "./grid/grid-mrl-custom-navigation/grid-mrl-custom-navigation.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [GridMRLCustomNavigationComponent]
})
export class AppComponent {}