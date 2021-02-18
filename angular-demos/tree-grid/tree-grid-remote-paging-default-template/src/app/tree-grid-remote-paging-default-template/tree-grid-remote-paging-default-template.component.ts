import { formatNumber } from "@angular/common";
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from "@angular/core";
import { GridPagingMode, IgxTreeGridComponent, IPagingEventArgs } from "igniteui-angular";

import { Observable } from "rxjs";
import { RemotePagingService } from "./remotePagingService";

@Component({
    encapsulation: ViewEncapsulation.None,
    providers: [RemotePagingService],
    selector: "tree-grid-remote-paging-default-template",
    styleUrls: ["./tree-grid-remote-paging-default-template.component.scss"],
    templateUrl: "./tree-grid-remote-paging-default-template.component.html"
})
export class TreeGridRemotePagingDefaultTemplateComponent implements OnInit, AfterViewInit, OnDestroy {

    public totalCount = 0;
    public data: Observable<any[]>;
    public page = 0;
    public perPage = 10;
    public mode = GridPagingMode.Remote;
    public isLoading = true;

    @ViewChild("treeGrid", { static: true }) public treeGrid: IgxTreeGridComponent;
    private _dataLengthSubscriber;

    constructor(
        private remoteService: RemotePagingService) {
    }

    public ngOnInit() {
        this.data = this.remoteService.remoteData.asObservable();
        this.data.subscribe((data) => {
            this.isLoading = false;
        })

        this._dataLengthSubscriber = this.remoteService.dataLength.subscribe((data) => {
            this.totalCount = data;
        });
    }

    public ngOnDestroy() {
        if (this._dataLengthSubscriber) {
            this._dataLengthSubscriber.unsubscribe();
        }
    }

    public ngAfterViewInit() {
        const skip = this.page * this.perPage
        this.remoteService.getData(skip, this.perPage);
        this.remoteService.getDataLength();
    }

    public paging(event: IPagingEventArgs) {
        this.isLoading = true;
        const skip = event.newPage * event.owner.perPage;
        this.remoteService.getData(skip, event.owner.perPage);
    }

    public perPageChange(perPage: number) {
        if (this.page < this.totalPages) {
            this.isLoading = true;
            const skip = this.page * perPage;
            this.remoteService.getData(skip, perPage);
        }
    }

    public log() {
        console.log(this.treeGrid.totalRecords, this.treeGrid.totalPages);
    }

    public getPage() {
        this.remoteService.getData(0, this.treeGrid.perPage);
    }

    public formatSize(value: number) {
        return formatNumber(value, "en") + " KB";
    }

    private get totalPages() {
        return Math.ceil(this.totalCount / this.perPage);
    }
}
