import { Component, ViewChild } from "@angular/core";
import { IDropDroppedEventArgs, IgxHierarchicalGridComponent, IgxHierarchicalRowComponent } from "igniteui-angular";
import { createData, IDrive } from "../../data/files.data";

enum DragIcon {
    DEFAULT = "drag_handle",
    ALLOW = "remove"
}

@Component({
    selector: "hierarchical-grid-row-drag",
    styleUrls: ["./hierarchical-grid-row-drag.component.css"],
    templateUrl: "hierarchical-grid-row-drag.component.html"
})

export class HGridDragSampleComponent {
    @ViewChild(IgxHierarchicalGridComponent, { read: IgxHierarchicalGridComponent, static: true })
    public hGrid: IgxHierarchicalGridComponent;
    public localData: IDrive[] = [];
    constructor() {
        this.localData = createData(3, 12, 8);
    }

    public onRowDragEnd(args) {
        args.animation = true;
    }

    public onDropAllowed(args: IDropDroppedEventArgs) {
        const draggedRow: IgxHierarchicalRowComponent = args.dragData;
        draggedRow.delete();
    }

    public onEnterAllowed(args) {
        this.changeGhostIcon(args.drag.ghostElement, DragIcon.ALLOW);
    }

    public onLeaveAllowed(args) {
        this.changeGhostIcon(args.drag.ghostElement, DragIcon.DEFAULT);
    }

    private changeGhostIcon(ghost, icon: string) {
        if (ghost) {
            const currentIcon = ghost.querySelector(".igx-grid__drag-indicator > igx-icon");
            if (currentIcon) {
                currentIcon.innerText = icon;
            }
        }
    }
}
