import { Component, ViewChild } from "@angular/core";
import { IDropDroppedEventArgs,
    IgxTreeGridComponent, IgxTreeGridRowComponent, Point } from "igniteui-angular";
import { generateEmployeeFlatData } from "../data/employees-flat";

@Component({
    selector: "tree-grid-row-reorder",
    styleUrls: ["tree-grid-row-reorder.component.css"],
    templateUrl: "tree-grid-row-reorder.component.html"
})
export class TreeGridRowReorderComponent {
    @ViewChild(IgxTreeGridComponent, { read: IgxTreeGridComponent, static : true })
    public treeGrid: IgxTreeGridComponent;
    public selectionMode = "multiple";
    public localData = [];
    constructor() {
        this.localData = generateEmployeeFlatData();
    }

    public rowDragStart(args: any): void {
        const targetRow: IgxTreeGridRowComponent = args.dragData;
        if (targetRow.expanded) {
            this.treeGrid.collapseRow(targetRow.rowID);
        }
    }

    public dropInGrid(args: IDropDroppedEventArgs): void {
        const draggedRow: IgxTreeGridRowComponent = args.dragData;
        const event = args.originalEvent;
        const cursorPosition: Point = { x: event.clientX, y: event.clientY };
        this.moveRow(draggedRow, cursorPosition);
    }

    private moveRow(draggedRow: IgxTreeGridRowComponent, cursorPosition: Point): void {
        const row: IgxTreeGridRowComponent = this.catchCursorPosOnElem(this.treeGrid.rowList.toArray(), cursorPosition);
        if (!row) { return; }
        if (row.rowData.ParentID === -1) {
            this.performDrop(draggedRow, row).ParentID = -1;
        } else {
            if (row.rowData.ParentID === draggedRow.rowData.ParentID) {
                this.performDrop(draggedRow, row);
            } else {
                const rowIndex = this.getRowIndex(draggedRow.rowData);
                this.localData[rowIndex].ParentID = row.rowData.ParentID;
            }
        }
        if (draggedRow.selected) {
            this.treeGrid.selectRows([this.treeGrid.rowList.toArray()
                .find((r) => r.rowData.ID === draggedRow.rowData.ID).rowID], false);
        }

        this.localData = [...this.localData];
    }

    private performDrop(
        draggedRow: IgxTreeGridRowComponent, targetRow: IgxTreeGridRowComponent) {
        const draggedRowIndex = this.getRowIndex(draggedRow.rowData);
        const targetRowIndex: number = this.getRowIndex(targetRow.rowData);
        if (draggedRowIndex === -1 || targetRowIndex === -1) { return; }
        this.localData.splice(draggedRowIndex, 1);
        this.localData.splice(targetRowIndex, 0, draggedRow.rowData);
        return this.localData[targetRowIndex];
    }

    private getRowIndex(rowData: any): number {
        return this.localData.indexOf(rowData);
    }

    private catchCursorPosOnElem(rowListArr: IgxTreeGridRowComponent[], cursorPosition: Point)
        : IgxTreeGridRowComponent {
        for (const row of rowListArr) {
            const rowRect = row.nativeElement.getBoundingClientRect();
            if (cursorPosition.y > rowRect.top + window.scrollY && cursorPosition.y < rowRect.bottom + window.scrollY &&
                cursorPosition.x > rowRect.left + window.scrollX && cursorPosition.x < rowRect.right + window.scrollX) {
                return row;
            }
        }

        return null;
    }
}
