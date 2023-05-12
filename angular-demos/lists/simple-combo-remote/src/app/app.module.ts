import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxComboModule,
	IgxSimpleComboModule,
	IgxToastModule
 } from "igniteui-angular";
import { HttpClientModule } from "@angular/common/http";
import { RemoteNWindService } from "./services/remoteNwind.service";
import { SimpleComboRemoteComponent } from "./lists/combo/simple-combo-remote/simple-combo-remote.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	SimpleComboRemoteComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxComboModule,
	IgxSimpleComboModule,
	IgxToastModule,
	HttpClientModule
],
  providers: [RemoteNWindService],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
