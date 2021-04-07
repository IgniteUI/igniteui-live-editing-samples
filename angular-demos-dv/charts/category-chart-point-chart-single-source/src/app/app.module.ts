import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { CategoryChartPointChartSingleSourceComponent } from "./point-chart-single-source/category-chart-point-chart-single-source.component";
import { IgxCategoryChartModule } from "igniteui-angular-charts";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	CategoryChartPointChartSingleSourceComponent
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
