import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { IBaseChipEventArgs, IChipsAreaReorderEventArgs, IgxChipsAreaComponent, IgxChipComponent, IgxIconComponent, IgxPrefixDirective } from 'igniteui-angular';


@Component({
    selector: 'app-chip',
    styleUrls: ['./chip-styling.component.scss'],
    templateUrl: './chip-styling.component.html',
    imports: [IgxChipsAreaComponent, IgxChipComponent, IgxIconComponent, IgxPrefixDirective]
})

export class ChipStylingSampleComponent {
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

    public chipsOrderChanged(event: IChipsAreaReorderEventArgs) {
        const newChipList = [];
        for (const chip of event.chipsArray) {
            const chipItem = this.chipList.filter((item) => item.id === chip.id)[0];
            newChipList.push(chipItem);
        }
        this.chipList = newChipList;
    }
}
