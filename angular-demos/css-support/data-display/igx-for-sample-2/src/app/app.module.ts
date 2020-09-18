import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { 
	IgxAvatarModule,
	IgxFilterModule,
	IgxListModule,
	IgxIconModule,
	IgxForOfModule,
	IgxInputGroupModule
 } from "igniteui-angular";
import { IgxForHorizontalComponent } from "./igxFor/igxFor-horizontal-sample/igxFor-horizontal.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		IgxForHorizontalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxAvatarModule,
		IgxFilterModule,
		IgxListModule,
		IgxIconModule,
		IgxForOfModule,
		IgxInputGroupModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
