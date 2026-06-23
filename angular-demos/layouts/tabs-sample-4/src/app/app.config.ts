import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideIgniteIntl } from 'igniteui-angular';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './tabs-sample-4/routes';



export const AppConfig: ApplicationConfig = {
    providers: [
        importProvidersFrom(
            BrowserModule,
            FormsModule
        ),
        provideAnimations(),
        provideIgniteIntl(),
        provideRouter([]),
        provideRouter(routes, withComponentInputBinding())
    ]
};