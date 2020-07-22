import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { PieChartOthersComponent } from "./pie-chart-others/pie-chart-others.component";
import { IgxPieChartModule } from "igniteui-angular-charts";

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
		IgxPieChartModule
  ],
  providers: [],
  entryComponents: []
})
export class AppModule {}
