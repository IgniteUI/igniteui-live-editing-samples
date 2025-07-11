import { NgTemplateOutlet } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FilteringExpressionsTree, FilteringLogic, IExpressionTree, IgxComboModule, IgxNumberFilteringOperand, IgxQueryBuilderComponent, IgxQueryBuilderHeaderComponent, IgxQueryBuilderSearchValueTemplateDirective, IgxRadioModule, IgxSelectModule, IgxStringFilteringOperand } from 'igniteui-angular';

@Component({
    selector: 'app-query-builder-template-sample',
    styleUrls: ['./query-builder-template-sample.component.scss'],
    templateUrl: 'query-builder-template-sample.component.html',
    imports: [
    IgxQueryBuilderComponent,
    IgxQueryBuilderHeaderComponent,
    IgxSelectModule,
    IgxRadioModule,
    IgxComboModule,
    FormsModule,
    IgxQueryBuilderSearchValueTemplateDirective,
    NgTemplateOutlet
]
})
export class QueryBuilderTemplateSampleComponent implements OnInit {
    public shipViaFormatterData: any[];
    public entities: any[];
    public companiesFields: any[];
    public ordersFields: any[];
    public expressionTree: IExpressionTree;
    public regionOptions = [
        { text: 'Central North America', value: 'CNA' },
        { text: 'Central Europe', value: 'CEU' },
        { text: 'Mediterranean region', value: 'MED' },
        { text: 'Central Asia', value: 'CAS' },
        { text: 'South Asia', value: 'SAS' },
        { text: 'Western Africa', value: 'WAF' },
        { text: 'Amazonia', value: 'AMZ' },
        { text: 'Southern Africa', value: 'SAF' },
        { text: 'Northern Australia', value: 'NAU' }];

    public statusOptions = [
        { text: 'New', value: 1 },
        { text: 'Shipped', value: 2 },
        { text: 'Done', value: 3 }];

    public ngOnInit(): void {
        this.ordersFields = [
            { field: "CompanyID", dataType: "string" },
            { field: "OrderID", dataType: "number" },
            { field: "EmployeeId", dataType: "number" },
            { field: "OrderDate", dataType: "date" },
            { field: "RequiredDate", dataType: "date" },
            { field: "ShippedDate", dataType: "date" },
            { field: "ShipVia", dataType: "number" },
            { field: "Freight", dataType: "number" },
            { field: "ShipName", dataType: "string" },
            { field: "ShipCity", dataType: "string" },
            { field: "ShipPostalCode", dataType: "string" },
            { field: "ShipCountry", dataType: "string" },
            { field: "Region", dataType: "string", formatter: (value: any, rowData: any) => rowData === 'equals' || rowData === 'doesNotEqual' ? `${value.value}` : value },
            { field: "OrderStatus", dataType: "number" }
        ];

        this.entities = [
            {
                name: "Orders",
                fields: this.ordersFields
            }
        ];

        const tree = new FilteringExpressionsTree(FilteringLogic.And, undefined, 'Orders', ['*']);
        tree.filteringOperands.push({
            fieldName: 'Region',
            condition: IgxStringFilteringOperand.instance().condition('equals'),
            conditionName: 'equals',
            searchVal: this.regionOptions[0]
        });
        tree.filteringOperands.push({
            fieldName: 'OrderStatus',
            condition: IgxNumberFilteringOperand.instance().condition('equals'),
            conditionName: 'equals',
            searchVal: 1
        });

        this.expressionTree = tree;
    }

    public printExpressionTree(tree: IExpressionTree) {
        return tree ? JSON.stringify(tree, null, 2) : 'Please add an expression!';
    }
}
