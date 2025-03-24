import { Component } from "@angular/core";
import { ReactiveFormsSampleComponent } from "./how-to/reactive-forms/reactive-forms.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ReactiveFormsSampleComponent]
})
export class AppComponent {}