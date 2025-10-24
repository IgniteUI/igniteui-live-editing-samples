import { Component } from "@angular/core";
import { TransactionBaseComponent } from "./services/transaction/transaction-base/transaction-base.component";


@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [TransactionBaseComponent]
})
export class AppComponent {}