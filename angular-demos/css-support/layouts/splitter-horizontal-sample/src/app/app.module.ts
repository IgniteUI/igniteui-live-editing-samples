import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxSplitterModule } from "igniteui-angular";
import { SplitterHorizontalSampleComponent } from "./splitter-horizontal-sample/splitter-horizontal-sample.component";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		SplitterHorizontalSampleComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxSplitterModule
  ],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
