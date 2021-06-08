import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxComboModule,
	IgxToastModule
 } from "igniteui-angular";
import { ComboRemoteComponent } from "./lists/combo/combo-remote/combo-remote.component";
import { HttpClientModule } from "@angular/common/http";
import { RemoteNWindService } from "./services/remoteNwind.service";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	ComboRemoteComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxComboModule,
	IgxToastModule,
	HttpClientModule
],
  providers: [RemoteNWindService],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
