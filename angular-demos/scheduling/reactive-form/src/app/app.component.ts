import { Component } from "@angular/core";
import { DateTimePickerRFSampleComponent } from "./scheduling/datepicker/reactive-form/reactive-form.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [DateTimePickerRFSampleComponent]
})
export class AppComponent {}