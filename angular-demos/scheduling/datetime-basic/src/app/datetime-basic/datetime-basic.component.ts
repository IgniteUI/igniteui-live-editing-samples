import { Component } from '@angular/core';

@Component({
    selector: 'app-datetime-basic',
    styleUrls: ['./datetime-basic.component.scss'],
    templateUrl: './datetime-basic.component.html'
})
export class DateTimeBasicComponent {
    public date = new Date();
}
