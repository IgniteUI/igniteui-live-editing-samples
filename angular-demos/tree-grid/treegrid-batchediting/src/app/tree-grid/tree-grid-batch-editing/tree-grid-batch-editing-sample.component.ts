import { Component, OnInit, ViewChild } from "@angular/core";
import {
    IgxDialogComponent,
    IgxGridComponent,
    IgxTreeGridComponent,
    Transaction
} from "igniteui-angular";
import { generateRandomInteger } from "../../data/utils";
import { generateEmployeeFlatData, IEmployee } from "../data/employees-flat";

@Component({
    selector: "app-tree-grid-batch-editing-sample",
    styleUrls: ["tree-grid-batch-editing-sample.component.scss"],
    templateUrl: "tree-grid-batch-editing-sample.component.html"
})
export class TreeGridBatchEditingSampleComponent implements OnInit {

    public data: IEmployee[];
    public transactionsData: Transaction[] = [];

    @ViewChild("treeGrid", { static: true }) public treeGrid: IgxTreeGridComponent;
    @ViewChild(IgxDialogComponent, { static: true }) public dialog: IgxDialogComponent;
    @ViewChild("dialogGrid", { read: IgxGridComponent, static: true }) public dialogGrid: IgxGridComponent;

    private nextRow = 1;

    public ngOnInit(): void {
        this.data = generateEmployeeFlatData();
        this.transactionsData = this.treeGrid.transactions.getAggregatedChanges(true);
        this.treeGrid.transactions.onStateUpdate.subscribe(() => {
            this.transactionsData = this.treeGrid.transactions.getAggregatedChanges(true);
        });
    }

    public addRow() {
        const addedData: IEmployee = {
            Age: 32,
            HireDate: new Date(generateRandomInteger(2008, 2015),
            generateRandomInteger(0, 12), generateRandomInteger(5, 25)),
            ID: this.data.length + this.nextRow++,
            Name: "John Doe",
            OnPTO: false,
            ParentID: -1,
            Title: "Junior Sales Representative"
        };
        this.treeGrid.addRow(addedData);
    }

    public addChildRow(id) {
        const addedData: IEmployee = {
            Age: generateRandomInteger(18, 55),
            HireDate: new Date(generateRandomInteger(2008, 2015),
            generateRandomInteger(0, 12), generateRandomInteger(5, 25)),
            ID: this.data.length + this.nextRow++,
            Name: "Added Addedington",
            OnPTO: false,
            ParentID: -1,
            Title: "Intern"
        };
        this.treeGrid.addRow(
            addedData,
            id);
    }

    public deleteRow(id) {
        this.treeGrid.deleteRow(id);
    }

    public undo() {
        this.treeGrid.transactions.undo();
    }

    public redo() {
        this.treeGrid.transactions.redo();
    }

    public commit() {
        this.treeGrid.transactions.commit(this.data);
        this.dialog.close();
    }

    public cancel() {
        this.dialog.close();
    }

    public discard() {
        this.treeGrid.transactions.clear();
        this.dialog.close();
    }

    public get undoEnabled(): boolean {
        return this.treeGrid.transactions.canUndo;
    }

    public get redoEnabled(): boolean {
        return this.treeGrid.transactions.canRedo;
    }

    public openCommitDialog() {
        this.dialog.open();
        this.dialogGrid.reflow();
    }

    public get hasTransactions(): boolean {
        return this.treeGrid.transactions.getAggregatedChanges(false).length > 0;
    }

    public stateFormatter(value: string) {
        return value ? JSON.stringify(value) : "";
    }

    public typeFormatter(value: string) {
        return value ? value.toUpperCase() : "";
    }

    public classFromType(type: string): string {
        return type ? `transaction--${type.toLowerCase()}` : "";
    }
}
