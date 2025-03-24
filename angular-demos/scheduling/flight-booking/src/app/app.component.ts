import { Component } from "@angular/core";
import { FlightBookingComponent } from "./daterangepicker-flight-booking/daterangepicker-flight-booking";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [FlightBookingComponent]
})
export class AppComponent {}