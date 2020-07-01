import { Component } from "@angular/core";

@Component({
    selector: "datetime-basic",
    styleUrls: ["./datetime-basic.component.css"],
    templateUrl: "./datetime-basic.component.html"
})
export class DateTimeBasicComponent {
    public date = new Date();
}
