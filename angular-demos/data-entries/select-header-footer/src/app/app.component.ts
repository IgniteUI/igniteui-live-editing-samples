import { Component } from "@angular/core";
import { SelectHeaderFooterComponent } from "./select-header-footer/select-header-footer.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [SelectHeaderFooterComponent]
})
export class AppComponent {}