import { Component, ViewChild } from '@angular/core';
import { IgxActionStripComponent, IgxButtonDirective, IgxIconComponent } from 'igniteui-angular';

@Component({
    selector: 'app-action-strip-paragraph-styling',
    styleUrls: ['./action-strip-paragraph-styling.component.scss'],
    templateUrl: './action-strip-paragraph-styling.component.html',
    imports: [IgxActionStripComponent, IgxButtonDirective, IgxIconComponent]
})
export class ActionStripStylingComponent {
    @ViewChild('actionstrip') public actionStrip: IgxActionStripComponent;
    @ViewChild('myParagraph') public paragraph;
    public result: string;
    public isVisible = false;
    public textLeft = false;
    public textCenter = false;
    public textRight = false;

    public textDelete() {
        this.paragraph.nativeElement.classList.add('text-strike-through');
    }

    public textRestore() {
        this.paragraph.nativeElement.classList.remove('text-strike-through');
    }

    public showActions() {
        this.isVisible = true;
    }

    public hideActions() {
        this.isVisible = false;
    }
}
