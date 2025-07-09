import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { BrowserModule, HammerModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';

import { defineCustomElements } from 'igniteui-dockmanager/loader';
defineCustomElements();


export const AppConfig: ApplicationConfig = {
    providers: [
        importProvidersFrom(
            BrowserModule,
            FormsModule,
            HammerModule
        ),
        provideAnimations()
    ]
};