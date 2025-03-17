import { Component } from "@angular/core";
import { DateTimePickerTDFSampleComponent } from "./scheduling/datepicker/template-driven-form/template-driven-form.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [DateTimePickerTDFSampleComponent]
})
export class AppComponent {}