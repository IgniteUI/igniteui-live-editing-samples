import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { SparklineGridComponent } from "./sparkline-grid/sparkline-grid.component";
import { IgxSparklineModule } from "igniteui-angular-charts";
import { IgxGridModule } from "igniteui-angular";
import { Products } from "./utilities/Products.ts";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	SparklineGridComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxSparklineModule,
	IgxGridModule
],
  providers: [Products],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
