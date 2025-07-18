import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { IBaseChipEventArgs, IgxChipComponent, IgxIconComponent, IgxPrefixDirective } from 'igniteui-angular';


@Component({
    selector: 'app-chip-simple',
    styleUrls: ['./chip-simple.component.scss'],
    templateUrl: './chip-simple.component.html',
    imports: [IgxChipComponent, IgxIconComponent, IgxPrefixDirective]
})

export class ChipSimpleComponent {
    changeDetectionRef = inject(ChangeDetectorRef);

    public chipList = [
        {
           text: 'Country',
           id: '1',
           icon: 'place'
        },
        {
            text: 'City',
            id: '2',
            icon: 'location_city'
        },
        {
            text: 'Town',
            id: '3',
            icon: 'store'
        },
        {
            text: 'First Name',
            id: '4',
            icon: 'person_pin'
        }
    ];


    public chipRemoved(event: IBaseChipEventArgs) {
        this.chipList = this.chipList.filter((item) => item.id !== event.owner.id);
        this.changeDetectionRef.detectChanges();
    }
}
