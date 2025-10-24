import { Component } from "@angular/core";
import { TabsHeaderPrefixSuffixComponent } from "./tabs-header-prefix-suffix/tabs-header-prefix-suffix";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TabsHeaderPrefixSuffixComponent]
})
export class AppComponent {}