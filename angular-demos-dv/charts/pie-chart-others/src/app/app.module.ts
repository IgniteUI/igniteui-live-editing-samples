import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { PieChartOthersComponent } from "./pie-chart-others/pie-chart-others.component";
import { 
	IgxPieChartModule,
	IgxLegendModule,
	IgxItemLegendModule
 } from "igniteui-angular-charts";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	PieChartOthersComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPieChartModule,
	IgxLegendModule,
	IgxItemLegendModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
