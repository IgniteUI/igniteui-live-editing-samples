import { registerLocaleData } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IFormattingOptions, IgxSelectComponent, IgxPrefixDirective, IgxSelectItemComponent, IgxCardComponent, IgxMonthPickerComponent } from 'igniteui-angular';
import localeDE from '@angular/common/locales/de';
import localeFR from '@angular/common/locales/fr';
import localeAR from '@angular/common/locales/ar';
import localeZH from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';

@Component({
    selector: 'app-monthpicker-sample-3',
    styleUrls: ['./monthpicker-sample-3.component.scss'],
    templateUrl: './monthpicker-sample-3.component.html',
    imports: [IgxSelectComponent, FormsModule, IgxPrefixDirective, IgxSelectItemComponent, IgxCardComponent, IgxMonthPickerComponent]
})
export class MonthpickerSample3Component implements OnInit {
    public formatOptions: IFormattingOptions = {
        month: 'long'
    };

    public date = new Date();
    public locales = ['en', 'de', 'fr', 'ar', 'zh'];
    public locale = 'en';

    public ngOnInit(): void {
        registerLocaleData(localeDE);
        registerLocaleData(localeFR);
        registerLocaleData(localeAR);
        registerLocaleData(localeZH);
    }
}
