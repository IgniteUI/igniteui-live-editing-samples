import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { AngularMaterialComponent } from "./angular-sample.component";
import { 
	IgxAvatarModule,
	IgxCardModule,
	IgxButtonModule,
	IgxIconModule,
	IgxDialogModule,
	IgxDividerModule,
	IgxExpansionPanelModule
 } from "igniteui-angular";
import { 
	FormsModule,
	ReactiveFormsModule
 } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatSliderModule } from "@angular/material/slider";
import { MatStepperModule } from "@angular/material/stepper";
import { MatToolbarModule } from "@angular/material/toolbar";



@NgModule({
  bootstrap: [AppComponent],
  declarations: [
	AppComponent,
	AngularMaterialComponent
],
  imports: [
	BrowserModule,
	BrowserAnimationsModule,
	FormsModule,
	IgxAvatarModule,
	IgxCardModule,
	IgxButtonModule,
	IgxIconModule,
	IgxDialogModule,
	IgxDividerModule,
	IgxExpansionPanelModule,
	FormsModule,
	MatButtonModule,
	MatFormFieldModule,
	MatInputModule,
	MatMenuModule,
	MatSliderModule,
	MatStepperModule,
	MatToolbarModule,
	ReactiveFormsModule
],
  providers: [],
  entryComponents: [],
  schemas: []
})
export class AppModule {}
