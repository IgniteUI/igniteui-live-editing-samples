import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxBulletGraphModule } from "igniteui-angular-gauges/ES5/igx-bullet-graph-module";
import { BulletGraphLabelsComponent } from "./bullet-graph-labels/bullet-graph-labels.component";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		BulletGraphLabelsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxBulletGraphModule
  ],
  providers: [],
  entryComponents: []
})
export class AppModule {}
