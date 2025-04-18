import { Component } from '@angular/core';
import { IButtonGroupEventArgs, IgxButtonGroupComponent, IgxStepperComponent, IgxStepActiveIndicatorDirective, IgxIconComponent, IgxStepComponent, IgxStepTitleDirective, IgxStepContentDirective, IgxInputGroupComponent, IgxInputDirective, IgxLabelDirective, IgxButtonDirective, IgxStepSubtitleDirective, IgxRadioGroupDirective, IgxRadioComponent } from 'igniteui-angular';
import { FormsModule } from '@angular/forms';


@Component({
    selector: 'app-stepper-linear-sample',
    styleUrls: ['./stepper-linear-sample.component.scss'],
    templateUrl: './stepper-linear-sample.component.html',
    imports: [IgxButtonGroupComponent, IgxStepperComponent, IgxStepActiveIndicatorDirective, IgxIconComponent, IgxStepComponent, IgxStepTitleDirective, IgxStepContentDirective, FormsModule, IgxInputGroupComponent, IgxInputDirective, IgxLabelDirective, IgxButtonDirective, IgxStepSubtitleDirective, IgxRadioGroupDirective, IgxRadioComponent]
})
export class StepperLinearSampleComponent {
    public linear = false;

    public user: any = {
        fullName: '',
        email: '',
        city: '',
        street: '',
        city2: '',
        street2: '',
        payment: ''
    };

    public paymentTypes: string[] = [
        'PayPal (n@mail.com; 18/02/2021)',
        'Visa (**** **** **** 1234; 12/23)',
        'MasterCard (**** **** **** 5678; 12/24)'
    ];

    public modes: any[] = [
        {
            label: 'Linear', linear: true,
            selected: this.linear === true, togglable: true
        },
        {
            label: 'Non Linear', linear: false,
            selected: this.linear === false, togglable: true
        }
    ];

    public toggleModes(event: IButtonGroupEventArgs): void {
        this.linear = this.modes[event.index].linear;
    }
}
