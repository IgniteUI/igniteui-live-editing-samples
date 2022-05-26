import { TreemapOrientation } from "igniteui-angular-charts";
import { TreemapLayoutType } from "igniteui-angular-charts";
import { TreemapHeaderDisplayMode } from "igniteui-angular-charts";
import { Component, OnInit } from "@angular/core";
import { HorizontalAlignment, VerticalAlignment } from "igniteui-angular";

@Component({
    selector: "app-tree-map-layout",
    templateUrl: "./tree-map-layout.component.html",
    styleUrls: ["./tree-map-layout.component.scss"]
})
export class TreeMapLayoutComponent implements OnInit {

    public data: any[];

    public TreeLayout: TreemapLayoutType = TreemapLayoutType.Squarified;
    public TreeOrientation: TreemapOrientation = TreemapOrientation.Vertical;
    public HeaderMode: TreemapHeaderDisplayMode = TreemapHeaderDisplayMode.Overlay;
    public LabelHorizontalAlign: HorizontalAlignment = HorizontalAlignment.Center;
    public LabelVerticalAlign: VerticalAlignment = VerticalAlignment.Middle;

    constructor() { }

    public onTreemapLayoutChanged(e: any) {
        const value = e.target.value.toString();

        if (value == "Squarified") {
            this.TreeLayout = TreemapLayoutType.Squarified;
        }
        else if (value == "Stripped") {
            this.TreeLayout = TreemapLayoutType.Stripped;
        }
        else {
            this.TreeLayout = TreemapLayoutType.SliceAndDice;
        }
    }

    public onTreemapOrientationChanged(e: any) {
        const value = e.target.value.toString();

        if (value == "Horizontal") {
            this.TreeOrientation = TreemapOrientation.Horizontal;
        }
        else {
            this.TreeOrientation = TreemapOrientation.Vertical;
        }
    }

    public onTreemapHeadersChanged(e: any) {
        const value = e.target.value.toString();

        if (value == "Overlay")
            this.HeaderMode = TreemapHeaderDisplayMode.Overlay;
        else
            this.HeaderMode = TreemapHeaderDisplayMode.Header;
    }

    public onTreemapLabelAlignmentChanged(e: any) {
        const value = e.target.value.toString();

        if (value.includes("Left"))
            this.LabelHorizontalAlign = HorizontalAlignment.Left;
        else if (value.includes("Right"))
            this.LabelHorizontalAlign = HorizontalAlignment.Right;
        else
            this.LabelHorizontalAlign = HorizontalAlignment.Center;

        if (value.includes("Top"))
            this.LabelVerticalAlign = VerticalAlignment.Top;
        else if (value.includes("Bottom"))
            this.LabelVerticalAlign = VerticalAlignment.Bottom;
        else
            this.LabelVerticalAlign = VerticalAlignment.Middle;
    }

    ngOnInit(): void {
        this.data = [
            { Parent: null, Name: "Asia", Pop: Number.NaN, },
            { Parent: null, Name: "Middle East", Pop: Number.NaN, },
            { Parent: null, Name: "Europe", Pop: Number.NaN, },
            { Parent: null, Name: "North America", Pop: Number.NaN, },
            { Parent: null, Name: "Central America", Pop: Number.NaN, },
            { Parent: null, Name: "South America", Pop: Number.NaN, },
            { Parent: null, Name: "Africa", Pop: Number.NaN, },
            { Parent: null, Name: "Oceania", Pop: Number.NaN, },
            // creating children of tree data
            { Parent: "Africa", Name: "Angola", Pop: 19618432 },
            { Parent: "Africa", Name: "Benin", Pop: 9099922 },
            { Parent: "Africa", Name: "Botswana", Pop: 2030738 },
            { Parent: "Africa", Name: "Burkina Faso", Pop: 16967845 },
            { Parent: "Africa", Name: "Burundi", Pop: 8575172 },
            { Parent: "Africa", Name: "Cameroon", Pop: 20030362 },
            { Parent: "Africa", Name: "Cape Verde", Pop: 500585 },
            { Parent: "Africa", Name: "Central African Republic", Pop: 4486837 },
            { Parent: "Africa", Name: "Chad", Pop: 11525496 },
            { Parent: "Africa", Name: "Comoros", Pop: 753943 },
            { Parent: "Africa", Name: "Cote Ivoire", Pop: 20152894 },
            { Parent: "Africa", Name: "Djibouti", Pop: 905564 },
            { Parent: "Africa", Name: "Equatorial Guinea", Pop: 720213 },
            { Parent: "Africa", Name: "Eritrea", Pop: 5415280 },
            { Parent: "Africa", Name: "Ethiopia", Pop: 84734262 },
            { Parent: "Africa", Name: "Gabon", Pop: 1534262 },
            { Parent: "Africa", Name: "Gambia", Pop: 1776103 },
            { Parent: "Africa", Name: "Ghana", Pop: 24965816 },
            { Parent: "Africa", Name: "Guinea", Pop: 10221808 },
            { Parent: "Africa", Name: "Guinea-Bissau", Pop: 1547061 },
            { Parent: "Africa", Name: "Kenya", Pop: 41609728 },
            { Parent: "Africa", Name: "Lesotho", Pop: 2193843 },
            { Parent: "Africa", Name: "Liberia", Pop: 4128572 },
            { Parent: "Africa", Name: "Madagascar", Pop: 21315135 },
            { Parent: "Africa", Name: "Malawi", Pop: 15380888 },
            { Parent: "Africa", Name: "Mali", Pop: 15839538 },
            { Parent: "Africa", Name: "Mauritania", Pop: 3541540 },
            { Parent: "Africa", Name: "Mauritius", Pop: 1286051 },
            { Parent: "Africa", Name: "Mozambique", Pop: 23929708 },
            { Parent: "Africa", Name: "Namibia", Pop: 2324004 },
            { Parent: "Africa", Name: "Niger", Pop: 16068994 },
            { Parent: "Africa", Name: "Nigeria", Pop: 162470737 },
            { Parent: "Africa", Name: "Rwanda", Pop: 10942950 },
            { Parent: "Africa", Name: "Sao Tome and Principe", Pop: 168526 },
            { Parent: "Africa", Name: "Senegal", Pop: 12767556 },
            { Parent: "Africa", Name: "Seychelles", Pop: 86000 },
            { Parent: "Africa", Name: "Sierra Leone", Pop: 5997486 },
            { Parent: "Africa", Name: "South Africa", Pop: 50586757 },
            { Parent: "Africa", Name: "South Sudan", Pop: 10314021 },
            { Parent: "Africa", Name: "Sudan", Pop: 34318385 },
            { Parent: "Africa", Name: "Swaziland", Pop: 1067773 },
            { Parent: "Africa", Name: "Tanzania", Pop: 46218486 },
            { Parent: "Africa", Name: "Togo", Pop: 6154813 },
            { Parent: "Africa", Name: "Uganda", Pop: 34509205 },
            { Parent: "Africa", Name: "Zambia", Pop: 13474959 },
            { Parent: "Africa", Name: "Zimbabwe", Pop: 12754378 },
            { Parent: "Africa", Name: "Congo", Pop: 4139748 },
            { Parent: "Africa", Name: "Congo, Dem. Rep.", Pop: 67757577 },
            { Parent: "Asia", Name: "Bangladesh", Pop: 150493658 },
            { Parent: "Asia", Name: "Bhutan", Pop: 738267 },
            { Parent: "Asia", Name: "Brunei", Pop: 405938 },
            { Parent: "Asia", Name: "Cambodia", Pop: 14305183 },
            { Parent: "Asia", Name: "China", Pop: 1344130000 },
            { Parent: "Asia", Name: "India", Pop: 1241491960 },
            { Parent: "Asia", Name: "Indonesia", Pop: 242325638 },
            { Parent: "Asia", Name: "Japan", Pop: 127817277 },
            { Parent: "Asia", Name: "Kazakhstan", Pop: 16558676 },
            { Parent: "Asia", Name: "Kyrgyz Republic", Pop: 5514600 },
            { Parent: "Asia", Name: "Noth Korea", Pop: 24451285 },
            { Parent: "Asia", Name: "South Korea", Pop: 49779000 },
            { Parent: "Asia", Name: "Macao", Pop: 555731 },
            { Parent: "Asia", Name: "Hong Kong", Pop: 7071600 },
            { Parent: "Asia", Name: "Lao PDR", Pop: 6288037 },
            { Parent: "Asia", Name: "Malaysia", Pop: 28859154 },
            { Parent: "Asia", Name: "Maldives", Pop: 320081 },
            { Parent: "Asia", Name: "Mongolia", Pop: 2800114 },
            { Parent: "Asia", Name: "Myanmar", Pop: 48336763 },
            { Parent: "Asia", Name: "Nepal", Pop: 30485798 },
            { Parent: "Asia", Name: "Philippines", Pop: 94852030 },
            { Parent: "Asia", Name: "Singapore", Pop: 5183700 },
            { Parent: "Asia", Name: "Sri Lanka", Pop: 20869000 },
            { Parent: "Asia", Name: "Tajikistan", Pop: 6976958 },
            { Parent: "Asia", Name: "Thailand", Pop: 69518555 },
            { Parent: "Asia", Name: "Turkmenistan", Pop: 5105301 },
            { Parent: "Asia", Name: "Uzbekistan", Pop: 29341200 },
            { Parent: "Asia", Name: "Vietnam", Pop: 87840000 },
            { Parent: "Central America", Name: "Antigua and Barbuda", Pop: 89612 },
            { Parent: "Central America", Name: "Aruba", Pop: 108141 },
            { Parent: "Central America", Name: "Bahamas", Pop: 347176 },
            { Parent: "Central America", Name: "Barbados", Pop: 273925 },
            { Parent: "Central America", Name: "Belize", Pop: 356600 },
            { Parent: "Central America", Name: "Bermuda", Pop: 64700 },
            { Parent: "Central America", Name: "Cayman Islands", Pop: 56729 },
            { Parent: "Central America", Name: "Costa Rica", Pop: 4726575 },
            { Parent: "Central America", Name: "Cuba", Pop: 11253665 },
            { Parent: "Central America", Name: "Curacao", Pop: 145619 },
            { Parent: "Central America", Name: "Dominica", Pop: 67675 },
            { Parent: "Central America", Name: "Dominican Republic", Pop: 10056181 },
            { Parent: "Central America", Name: "Faeroe Islands", Pop: 48863 },
            { Parent: "Central America", Name: "Grenada", Pop: 104890 },
            { Parent: "Central America", Name: "Guam", Pop: 182111 },
            { Parent: "Central America", Name: "Guatemala", Pop: 14757316 },
            { Parent: "Central America", Name: "Haiti", Pop: 10123787 },
            { Parent: "Central America", Name: "Honduras", Pop: 7754687 },
            { Parent: "Central America", Name: "Jamaica", Pop: 2706500 },
            { Parent: "Central America", Name: "Nicaragua", Pop: 5869859 },
            { Parent: "Central America", Name: "Northern Mariana Islands", Pop: 61174 },
            { Parent: "Central America", Name: "Panama", Pop: 3571185 },
            { Parent: "Central America", Name: "St. Kitts and Nevis", Pop: 53051 },
            { Parent: "Central America", Name: "St. Lucia", Pop: 176000 },
            { Parent: "Central America", Name: "St. Vincent and the Grenadines", Pop: 109365 },
            { Parent: "Central America", Name: "Trinidad and Tobago", Pop: 1346350 },
            { Parent: "Central America", Name: "Turks and Caicos Islands", Pop: 39184 },
            { Parent: "Central America", Name: "Virgin Islands (U.S.)", Pop: 109666 },
            { Parent: "Central America", Name: "El Salvador", Pop: 6227491 },
            { Parent: "Central America", Name: "Puerto Rico", Pop: 3706690 },
            { Parent: "Europe", Name: "Albania", Pop: 3215988 },
            { Parent: "Europe", Name: "Andorra", Pop: 86165 },
            { Parent: "Europe", Name: "Armenia", Pop: 3100236 },
            { Parent: "Europe", Name: "Austria", Pop: 8423635 },
            { Parent: "Europe", Name: "Belarus", Pop: 9473000 },
            { Parent: "Europe", Name: "Belgium", Pop: 11020952 },
            { Parent: "Europe", Name: "Bosnia and Herzegovina", Pop: 3752228 },
            { Parent: "Europe", Name: "Bulgaria", Pop: 7348328 },
            { Parent: "Europe", Name: "Channel Islands", Pop: 153876 },
            { Parent: "Europe", Name: "Croatia", Pop: 4403000 },
            { Parent: "Europe", Name: "Cyprus", Pop: 1116564 },
            { Parent: "Europe", Name: "Czech Republic", Pop: 10496088 },
            { Parent: "Europe", Name: "Denmark", Pop: 5570572 },
            { Parent: "Europe", Name: "Estonia", Pop: 1339928 },
            { Parent: "Europe", Name: "Finland", Pop: 5388272 },
            { Parent: "Europe", Name: "France", Pop: 65433714 },
            { Parent: "Europe", Name: "Georgia", Pop: 4486000 },
            { Parent: "Europe", Name: "Germany", Pop: 81797673 },
            { Parent: "Europe", Name: "Greece", Pop: 11300410 },
            { Parent: "Europe", Name: "Hungary", Pop: 9971727 },
            { Parent: "Europe", Name: "Iceland", Pop: 319014 },
            { Parent: "Europe", Name: "Ireland", Pop: 4576317 },
            { Parent: "Europe", Name: "Isle of Man", Pop: 83327 },
            { Parent: "Europe", Name: "Italy", Pop: 60723603 },
            { Parent: "Europe", Name: "Kosovo", Pop: 1802765 },
            { Parent: "Europe", Name: "Latvia", Pop: 2058184 },
            { Parent: "Europe", Name: "Liechtenstein", Pop: 36304 },
            { Parent: "Europe", Name: "Lithuania", Pop: 3030173 },
            { Parent: "Europe", Name: "Luxembourg", Pop: 518252 },
            { Parent: "Europe", Name: "Malta", Pop: 415654 },
            { Parent: "Europe", Name: "Moldova", Pop: 3559000 },
            { Parent: "Europe", Name: "Monaco", Pop: 35427 },
            { Parent: "Europe", Name: "Montenegro", Pop: 632261 },
            { Parent: "Europe", Name: "Netherlands", Pop: 16693074 },
            { Parent: "Europe", Name: "Norway", Pop: 4953088 },
            { Parent: "Europe", Name: "Poland", Pop: 38534157 },
            { Parent: "Europe", Name: "Portugal", Pop: 10556999 },
            { Parent: "Europe", Name: "Romania", Pop: 21384832 },
            { Parent: "Europe", Name: "Russian", Pop: 142960000 },
            { Parent: "Europe", Name: "San Marino", Pop: 31735 },
            { Parent: "Europe", Name: "Serbia", Pop: 7258745 },
            { Parent: "Europe", Name: "Sint Maarten", Pop: 36609 },
            { Parent: "Europe", Name: "Slovak Republic", Pop: 5398384 },
            { Parent: "Europe", Name: "Slovenia", Pop: 2052843 },
            { Parent: "Europe", Name: "Spain", Pop: 46174601 },
            { Parent: "Europe", Name: "St. Martin (French part)", Pop: 30615 },
            { Parent: "Europe", Name: "Sweden", Pop: 9449213 },
            { Parent: "Europe", Name: "Switzerland", Pop: 7912398 },
            { Parent: "Europe", Name: "Ukraine", Pop: 45706100 },
            { Parent: "Europe", Name: "United Kingdom", Pop: 62744081 },
            { Parent: "Europe", Name: "Macedonia, FYR", Pop: 2063893 },
            { Parent: "Middle East", Name: "Afghanistan", Pop: 35320445 },
            { Parent: "Middle East", Name: "Algeria", Pop: 35980193 },
            { Parent: "Middle East", Name: "Azerbaijan", Pop: 9173082 },
            { Parent: "Middle East", Name: "Bahrain", Pop: 1323535 },
            { Parent: "Middle East", Name: "Iraq", Pop: 32961959 },
            { Parent: "Middle East", Name: "Israel", Pop: 7765900 },
            { Parent: "Middle East", Name: "Jordan", Pop: 6181000 },
            { Parent: "Middle East", Name: "Kuwait", Pop: 2818042 },
            { Parent: "Middle East", Name: "Lebanon", Pop: 4259405 },
            { Parent: "Middle East", Name: "Libya", Pop: 6422772 },
            { Parent: "Middle East", Name: "Morocco", Pop: 32272974 },
            { Parent: "Middle East", Name: "Oman", Pop: 2846145 },
            { Parent: "Middle East", Name: "Pakistan", Pop: 176745364 },
            { Parent: "Middle East", Name: "Qatar", Pop: 1870041 },
            { Parent: "Middle East", Name: "Saudi Arabia", Pop: 28082541 },
            { Parent: "Middle East", Name: "Somalia", Pop: 9556873 },
            { Parent: "Middle East", Name: "Syrian Arab Republic", Pop: 20820311 },
            { Parent: "Middle East", Name: "Tunisia", Pop: 10673800 },
            { Parent: "Middle East", Name: "Turkey", Pop: 73639596 },
            { Parent: "Middle East", Name: "United Arab Emirates", Pop: 7890924 },
            { Parent: "Middle East", Name: "West Bank and Gaza", Pop: 3927051 },
            { Parent: "Middle East", Name: "Yemen", Pop: 24799880 },
            { Parent: "Middle East", Name: "Iran", Pop: 74798599 },
            { Parent: "Middle East", Name: "Egypt.", Pop: 82536770 },
            { Parent: "North America", Name: "Canada", Pop: 34483975 },
            { Parent: "North America", Name: "Greenland", Pop: 56840 },
            { Parent: "North America", Name: "Mexico", Pop: 114793341 },
            { Parent: "North America", Name: "United States", Pop: 311591917 },
            { Parent: "Oceania", Name: "American Samoa", Pop: 69543 },
            { Parent: "Oceania", Name: "Australia", Pop: 22323900 },
            { Parent: "Oceania", Name: "Fiji", Pop: 868406 },
            { Parent: "Oceania", Name: "French Polynesia", Pop: 273777 },
            { Parent: "Oceania", Name: "Kiribati", Pop: 101093 },
            { Parent: "Oceania", Name: "Marshall Islands", Pop: 54816 },
            { Parent: "Oceania", Name: "New Caledonia", Pop: 254024 },
            { Parent: "Oceania", Name: "New Zealand", Pop: 4405200 },
            { Parent: "Oceania", Name: "Palau", Pop: 20609 },
            { Parent: "Oceania", Name: "Papua New Guinea", Pop: 7013829 },
            { Parent: "Oceania", Name: "Samoa", Pop: 183874 },
            { Parent: "Oceania", Name: "Timor-Leste", Pop: 1175880 },
            { Parent: "Oceania", Name: "Tonga", Pop: 104509 },
            { Parent: "Oceania", Name: "Tuvalu", Pop: 9847 },
            { Parent: "Oceania", Name: "Vanuatu", Pop: 245619 },
            { Parent: "Oceania", Name: "Micronesia", Pop: 111542 },
            { Parent: "Oceania", Name: "Solomon Islands", Pop: 552267 },
            { Parent: "South America", Name: "Argentina", Pop: 40764561 },
            { Parent: "South America", Name: "Bolivia", Pop: 10088108 },
            { Parent: "South America", Name: "Brazil", Pop: 196655014 },
            { Parent: "South America", Name: "Chile", Pop: 17269525 },
            { Parent: "South America", Name: "Colombia", Pop: 46927125 },
            { Parent: "South America", Name: "Ecuador", Pop: 14666055 },
            { Parent: "South America", Name: "Guyana", Pop: 756040 },
            { Parent: "South America", Name: "Paraguay", Pop: 6568290 },
            { Parent: "South America", Name: "Peru", Pop: 29399817 },
            { Parent: "South America", Name: "Suriname", Pop: 529419 },
            { Parent: "South America", Name: "Uruguay", Pop: 3368595 },
            { Parent: "South America", Name: "Venezuela", Pop: 29278000 },
        ];
    }
}
