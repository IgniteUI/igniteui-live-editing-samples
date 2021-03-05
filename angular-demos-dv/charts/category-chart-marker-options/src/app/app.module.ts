import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { CategoryChartMarkerOptionsComponent } from "./marker-options/category-chart-marker-options.component";
import { IgxCategoryChartModule } from "igniteui-angular-charts";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	CategoryChartMarkerOptionsComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxCategoryChartModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
