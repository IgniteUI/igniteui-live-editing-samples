import { Component } from "@angular/core";
import { ListChatSampleComponent } from "./list-chat-sample/list-chat-sample.component";

@Component({
    selector: "app-root",
    styleUrls: ["./app.component.scss"],
    templateUrl: "./app.component.html",
    imports: [ListChatSampleComponent]
})
export class AppComponent {}