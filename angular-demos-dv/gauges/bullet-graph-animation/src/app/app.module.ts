import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { IgxBulletGraphModule } from "igniteui-angular-gauges";
import { BulletGraphAnimationComponent } from "./bullet-graph-animation/bullet-graph-animation.component";
import { IgxButtonModule } from "igniteui-angular";

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
		BulletGraphAnimationComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
		IgxBulletGraphModule,
		IgxButtonModule
  ],
  providers: [],
  entryComponents: []
})
export class AppModule {}
