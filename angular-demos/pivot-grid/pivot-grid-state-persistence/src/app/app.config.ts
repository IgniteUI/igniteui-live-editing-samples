import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './pivot-grid/pivot-state-persistence/routes';



export const AppConfig: ApplicationConfig = {
    providers: [
        importProvidersFrom(
            BrowserModule,
            FormsModule,
            HammerModule
        ),
        provideAnimations(),
        provideRouter(routes, withComponentInputBinding())
    ]
};