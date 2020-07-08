import { Component, OnInit, ViewChild } from "@angular/core";
import { IgxDialogComponent, IgxGridComponent, IgxHierarchicalGridComponent,
    IgxRowIslandComponent, Transaction } from "igniteui-angular";
import { SINGERS } from "../data";
import { Singer } from "../models";

@Component({
    selector: "hierarchical-grid-batch-editing",
    styleUrls: ["./hierarchical-grid-batch-editing.component.css"],
    templateUrl: "hierarchical-grid-batch-editing.component.html"
})

export class HGridBatchEditingSampleComponent implements OnInit {
    public get undoEnabledParent(): boolean {
        return this.hierarchicalGrid.transactions.canUndo;
    }

    public get redoEnabledParent(): boolean {
        return this.hierarchicalGrid.transactions.canRedo;
    }

    public get hasTransactions(): boolean {
        return this.hierarchicalGrid.transactions.getAggregatedChanges(false).length > 0 || this.hasChildTransactions;
    }

    public get hasChildTransactions(): boolean {
        return this.layout1.hgridAPI.getChildGrids()
            .find(c => c.transactions.getAggregatedChanges(false).length > 0) !== undefined;
    }

    public localdata: Singer[];
    public singer: Singer;
    public transactionsDataAll: Transaction[] = [];

    @ViewChild("dialogChanges", { read: IgxDialogComponent, static: true })
    public dialogChanges: IgxDialogComponent;

    @ViewChild("dialogGrid", { read: IgxGridComponent, static: true }) public dialogGrid: IgxGridComponent;

    @ViewChild("layout1", { static: true })
    private layout1: IgxRowIslandComponent;

    @ViewChild("hierarchicalGrid", { static: true })
    private hierarchicalGrid: IgxHierarchicalGridComponent;

    @ViewChild("dialogAddSinger", { read: IgxDialogComponent, static: true })
    private dialogSinger: IgxDialogComponent;

    constructor() {}

    public ngOnInit(): void {
        this.localdata = SINGERS;
        this.singer = {
            Artist: "Mock Jagger",
            Debut: 2005,
            GrammyAwards: 4,
            GrammyNominations: 7,
            HasGrammyAward: false
        };
    }

    public formatter = a => a;

    public undo(grid: IgxHierarchicalGridComponent) {
        grid.transactions.undo();
    }

    public redo(grid: IgxHierarchicalGridComponent) {
        grid.transactions.redo();
    }

    public commit() {
        this.hierarchicalGrid.transactions.commit(this.localdata);
        this.layout1.hgridAPI.getChildGrids().forEach((grid) => {
            grid.transactions.commit(grid.data);
        });
        this.dialogChanges.close();
    }

    public discard() {
        this.hierarchicalGrid.transactions.clear();
        this.layout1.hgridAPI.getChildGrids().forEach((grid) => {
            grid.transactions.clear();
        });
        this.dialogChanges.close();
    }

    public openCommitDialog() {
        this.transactionsDataAll = [...this.hierarchicalGrid.transactions.getAggregatedChanges(true)];
        this.layout1.hgridAPI.getChildGrids().forEach((grid) => {
            this.transactionsDataAll = this.transactionsDataAll.concat(grid.transactions.getAggregatedChanges(true));
        });
        this.dialogChanges.open();
        this.dialogGrid.reflow();
    }

    public addSinger() {
        this.hierarchicalGrid.addRow(this.singer);
        this.cancel();
    }

    public removeRow(rowIndex) {
        const row = this.hierarchicalGrid.getRowByIndex(rowIndex);
        row.delete();
    }

    public stateFormatter(value: string) {
        return JSON.stringify(value);
    }

    public typeFormatter(value: string) {
        return value.toUpperCase();
    }

    public classFromType(type: string): string {
        return `transaction--${type.toLowerCase()}`;
    }

    public cancel() {
        this.dialogChanges.close();
        this.dialogSinger.close();
        this.singer = {
            Artist: "Mock Jagger",
            Debut: 2005,
            GrammyAwards: 4,
            GrammyNominations: 7,
            HasGrammyAward: false
        };
    }
}
