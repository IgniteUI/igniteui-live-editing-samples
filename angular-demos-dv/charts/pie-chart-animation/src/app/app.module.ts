import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { PieChartAnimationComponent } from "./pie-chart-animation/pie-chart-animation.component";
import { 
	IgxPieChartModule,
	IgxLegendModule
 } from "igniteui-angular-charts";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	PieChartAnimationComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxPieChartModule,
	IgxLegendModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
