import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxDataChartComponent } from "igniteui-angular-charts";
import { IgxBubbleSeriesComponent } from "igniteui-angular-charts";
import { IgxSizeScaleComponent } from "igniteui-angular-charts";
import { IgxValueBrushScaleComponent } from "igniteui-angular-charts";

@Component({
    selector: 'app-data-chart-scatter-bubble-chart-styling',
    templateUrl: './data-chart-scatter-bubble-chart-styling.component.html',
    styleUrls: ['./data-chart-scatter-bubble-chart-styling.component.scss']
})
export class DataChartScatterBubbleChartStylingComponent implements OnInit {
    @ViewChild("chart", { static: true })
    public chart: IgxDataChartComponent;

    @ViewChild("series1", { static: true })
    public series1: IgxBubbleSeriesComponent;

    @ViewChild("series2", { static: true })
    public series2: IgxBubbleSeriesComponent;

    @ViewChild("series3", { static: true })
    public series3: IgxBubbleSeriesComponent;

    @ViewChild("series4", { static: true })
    public series4: IgxBubbleSeriesComponent;

    @ViewChild("series5", { static: true })
    public series5: IgxBubbleSeriesComponent;

    @ViewChild("series6", { static: true })
    public series6: IgxBubbleSeriesComponent;

    public africaDataSource: any[];
    public europeDataSource: any[];
    public asiaDataSource: any[];
    public northAmericaDataSource: any[];
    public oceaniaDataSource: any[];
    public southAmericaDataSource: any[];

    constructor() {}

    ngOnInit(): void {

        const data: any[] = [
            {Location: "Abkhazia",Code: "OWID_ABK",Year: "2015",TotalPopulation:  0.00},
            {Location: "Afghanistan",Code: "AFG",Year: "2015",TotalPopulation:  34414000.00,Continent: "Asia",GDPPerCapita: 1809.02},
            {Location: "Akrotiri and Dhekelia",Code: "OWID_AKD",Year: "2015",TotalPopulation:  0.00},
            {Location: "Albania",Code: "ALB",Year: "2015",TotalPopulation:  2891000.00,Continent: "Europe",GDPPerCapita: 10970.45},
            {Location: "Algeria",Code: "DZA",Year: "2015",TotalPopulation:  39728000.00,Continent: "Africa",GDPPerCapita: 13724.72},
            {Location: "American Samoa",Code: "ASM",Year: "2015",TotalPopulation:  56000.00,Continent: "Oceania"},
            {Location: "Andorra",Code: "AND",Year: "2015",TotalPopulation:  78000.00,Continent: "Europe"},
            {Location: "Angola",Code: "AGO",Year: "2015",TotalPopulation:  27884000.00,Continent: "Africa",GDPPerCapita: 6227.67},
            {Location: "Anguilla",Code: "AIA",Year: "2015",TotalPopulation:  14000.00,Continent: "North America"},
            {Location: "Antarctica",Code: "ATA",Year: "2015",TotalPopulation:  0.00},
            {Location: "Antigua and Barbuda",Code: "ATG",Year: "2015",TotalPopulation:  94000.00,Continent: "North America",GDPPerCapita: 20154.95},
            {Location: "Argentina",Code: "ARG",Year: "2015",TotalPopulation:  43075000.00,Continent: "South America",GDPPerCapita: 19116.91,AverageHoursWorked: 1691.54},
            {Location: "Armenia",Code: "ARM",Year: "2015",TotalPopulation:  2926000.00,Continent: "Asia",GDPPerCapita: 8195.93},
            {Location: "Aruba",Code: "ABW",Year: "2015",TotalPopulation:  104000.00,Continent: "North America"},
            {Location: "Australia",Code: "AUS",Year: "2015",TotalPopulation:  23932000.00,Continent: "Oceania",GDPPerCapita: 43923.26,AverageHoursWorked: 1747.01},
            {Location: "Austria",Code: "AUT",Year: "2015",TotalPopulation:  8679000.00,Continent: "Europe",GDPPerCapita: 44304.97,AverageHoursWorked: 1598.89},
            {Location: "Austria-Hungary",Code: "OWID_AUH",Year: "2015",TotalPopulation:  0.00},
            {Location: "Azerbaijan",Code: "AZE",Year: "2015",TotalPopulation:  9623000.00,Continent: "Asia",GDPPerCapita: 16698.86},
            {Location: "Baden",Code: "OWID_BAD",Year: "2015",TotalPopulation:  0.00},
            {Location: "Bahamas",Code: "BHS",Year: "2015",TotalPopulation:  374000.00, Continent: "North America",GDPPerCapita: 28407.13},
            {Location: "Bahrain",Code: "BHR",Year: "2015",TotalPopulation:  1372000.00,Continent: "Asia",GDPPerCapita: 43926.47},
            {Location: "Bangladesh",Code: "BGD",Year: "2015",TotalPopulation:  1.56E+08,Continent: "Asia",GDPPerCapita: 3132.57,AverageHoursWorked: 2232.35},
            {Location: "Barbados",Code: "BRB",Year: "2015",TotalPopulation:  285000.00,Continent: "North America",GDPPerCapita: 16458.10},
            {Location: "Bavaria",Code: "OWID_BAV",Year: "2015",TotalPopulation:  0.00},
            {Location: "Belarus",Code: "BLR",Year: "2015",TotalPopulation:  9439000.00,Continent: "Europe",GDPPerCapita: 17229.56},
            {Location: "Belgium",Code: "BEL",Year: "2015",TotalPopulation:  11288000.00,Continent: "Europe",GDPPerCapita: 41708.21,AverageHoursWorked: 1544.61},
            {Location: "Belize",Code: "BLZ",Year: "2015",TotalPopulation:  361000.00,Continent: "North America",GDPPerCapita: 8127.66},
            {Location: "Benin",Code: "BEN",Year: "2015",TotalPopulation:  10576000.00,Continent: "Africa",GDPPerCapita: 1987.14},
            {Location: "Bermuda",Code: "BMU",Year: "2015",TotalPopulation:  64000.00,Continent: "North America"},
            {Location: "Bhutan",Code: "BTN",Year: "2015",TotalPopulation:  728000.00,Continent: "Asia",GDPPerCapita: 7743.34},
            {Location: "Bolivia",Code: "BOL",Year: "2015",TotalPopulation:  10870000.00,Continent: "South America",GDPPerCapita: 6531.52},
            {Location: "Bonaire Sint Eustatius and Saba",Code: "BES",Year: "2015",TotalPopulation:  25000.00,Continent: "North America"},
            {Location: "Bosnia and Herzegovina",Code: "BIH",Year: "2015",TotalPopulation:  3429000.00,Continent: "Europe",GDPPerCapita: 10932.46},
            {Location: "Botswana",Code: "BWA",Year: "2015",TotalPopulation:  2121000.00,Continent: "Africa",GDPPerCapita: 15356.77},
            {Location: "Bouvet Island",Code: "BVT",Year: "2015",TotalPopulation:  0.00},
            {Location: "Brazil",Code: "BRA",Year: "2015",TotalPopulation:  2.04E+08,Continent: "South America",GDPPerCapita: 14702.59,AverageHoursWorked: 1709.49},
            {Location: "British Indian Ocean Territory",Code: "IOT",Year: "2015",TotalPopulation:  0.00},
            {Location: "British Virgin Islands",Code: "VGB",Year: "2015",TotalPopulation:  29000.00,Continent: "North America"},
            {Location: "Brunei",Code: "BRN",Year: "2015",TotalPopulation:  415000.00,Continent: "Asia",GDPPerCapita: 74600.16},
            {Location: "Bulgaria",Code: "BGR",Year: "2015",TotalPopulation:  7200000.00,Continent: "Europe",GDPPerCapita: 17000.18,AverageHoursWorked: 1644.39},
            {Location: "Burkina Faso",Code: "BFA",Year: "2015",TotalPopulation:  18111000.00,Continent: "Africa",GDPPerCapita: 1596.34},
            {Location: "Burundi",Code: "BDI",Year: "2015",TotalPopulation:  10160000.00,Continent: "Africa",GDPPerCapita: 748.42},
            {Location: "Cambodia",Code: "KHM",Year: "2015",TotalPopulation:  15521000.00,Continent: "Asia",GDPPerCapita: 3290.95,AverageHoursWorked: 2455.55},
            {Location: "Cameroon",Code: "CMR",Year: "2015",TotalPopulation:  23298000.00,Continent: "Africa",GDPPerCapita: 3289.07},
            {Location: "Canada",Code: "CAN",Year: "2015",TotalPopulation:  36027000.00,Continent: "North America",GDPPerCapita: 43149.48,AverageHoursWorked: 1707.07},
            {Location: "Cape Verde",Code: "CPV",Year: "2015",TotalPopulation:  525000.00,Continent: "Africa",GDPPerCapita: 5915.12},
            {Location: "Cayman Islands",Code: "CYM",Year: "2015",TotalPopulation:  62000.00,Continent: "North America"},
            {Location: "Central African Republic",Code: "CAF",Year: "2015",TotalPopulation:  4493000.00,Continent: "Africa",GDPPerCapita: 621.57},
            {Location: "Chad",Code: "TCD",Year: "2015",TotalPopulation:  14111000.00,Continent: "Africa",GDPPerCapita: 2067.10},
            {Location: "Channel Islands",Code: "OWID_CIS",Year: "2015",TotalPopulation:  165000.00,Continent: "Europe"},
            {Location: "Chile",Code: "CHL",Year: "2015",TotalPopulation:  17969000.00,Continent: "South America",GDPPerCapita: 22516.61,AverageHoursWorked: 1988.00},
            {Location: "China",Code: "CHN",Year: "2015",TotalPopulation:  1.41E+09,Continent: "Asia",GDPPerCapita: 13569.89,AverageHoursWorked: 2174.35},
            {Location: "Christmas Island",Code: "CXR",Year: "2015",TotalPopulation:  0.00},
            {Location: "Cocos Islands",Code: "CCK",Year: "2015",TotalPopulation:  0.00},
            {Location: "Colombia",Code: "COL",Year: "2015",TotalPopulation:  47521000.00,Continent: "South America",GDPPerCapita: 12985.38,AverageHoursWorked: 1997.75},
            {Location: "Comoros",Code: "COM",Year: "2015",TotalPopulation:  777000.00,Continent: "Africa",GDPPerCapita: 1413.06},
            {Location: "Congo",Code: "COG",Year: "2015",TotalPopulation:  4856000.00,Continent: "Africa",GDPPerCapita: 5542.89},
            {Location: "Cook Islands",Code: "COK",Year: "2015",TotalPopulation:  18000.00,Continent: "Oceania"},
            {Location: "Costa Rica",Code: "CRI",Year: "2015",TotalPopulation:  4848000.00,Continent: "North America",GDPPerCapita: 14738.61,AverageHoursWorked: 2156.91},
            {Location: "Cote d'Ivoire",Code: "CIV",Year: "2015",TotalPopulation:  23226000.00,Continent: "Africa",GDPPerCapita: 3241.61},
            {Location: "Croatia",Code: "HRV",Year: "2015",TotalPopulation:  4233000.00,Continent: "Europe",GDPPerCapita: 20983.99,AverageHoursWorked: 1827.65},
            {Location: "Cuba",Code: "CUB",Year: "2015",TotalPopulation:  11325000.00,Continent: "North America"},
            {Location: "Curacao",Code: "CUW",Year: "2015",TotalPopulation:  160000.00,Continent: "North America"},
            {Location: "Cyprus",Code: "CYP",Year: "2015",TotalPopulation:  1161000.00,Continent: "Europe",GDPPerCapita: 30549.10,AverageHoursWorked: 1789.71},
            {Location: "Czechia",Code: "CZE",Year: "2015",TotalPopulation:  10601000.00,Continent: "Europe",GDPPerCapita: 30605.42,AverageHoursWorked: 1756.16},
            {Location: "Czechoslovakia",Code: "OWID_CZS",Year: "2015",TotalPopulation:  0.00},
            {Location: "Democratic Republic of Congo",Code: "COD",Year: "2015",TotalPopulation:  76245000.00,Continent: "Africa",GDPPerCapita: 812.40},
            {Location: "Denmark",Code: "DNK",Year: "2015",TotalPopulation:  5689000.00,Continent: "Europe",GDPPerCapita: 45458.70,AverageHoursWorked: 1412.27},
            {Location: "Djibouti",Code: "DJI",Year: "2015",TotalPopulation:  914000.00,Continent: "Africa"},
            {Location: "Dominica",Code: "DMA",Year: "2015",TotalPopulation:  71000.00,Continent: "North America",GDPPerCapita: 9941.90},
            {Location: "Dominican Republic",Code: "DOM",Year: "2015",TotalPopulation:  10282000.00,Continent: "North America",GDPPerCapita: 13395.92},
            {Location: "East Germany",Code: "OWID_GDR",Year: "2015",TotalPopulation:  0.00},
            {Location: "Ecuador",Code: "ECU",Year: "2015",TotalPopulation:  16212000.00,Continent: "South America",GDPPerCapita: 10749.13,AverageHoursWorked: 1701.36},
            {Location: "Egypt",Code: "EGY",Year: "2015",TotalPopulation:  92443000.00,Continent: "Africa",GDPPerCapita: 10095.61},
            {Location: "El Salvador",Code: "SLV",Year: "2015",TotalPopulation:  6325000.00,Continent: "North America",GDPPerCapita: 7019.59},
            {Location: "Equatorial Guinea",Code: "GNQ",Year: "2015",TotalPopulation:  1169000.00,Continent: "Africa",GDPPerCapita: 27554.20},
            {Location: "Eritrea",Code: "ERI",Year: "2015",TotalPopulation:  3343000.00,Continent: "Africa"},
            {Location: "Eritrea and Ethiopia",Code: "OWID_ERE",Year: "2015",TotalPopulation:  0.00},
            {Location: "Estonia",Code: "EST",Year: "2015",TotalPopulation:  1315000.00,Continent: "Europe",GDPPerCapita: 27549.58,AverageHoursWorked: 1851.62},
            {Location: "Eswatini",Code: "SWZ",Year: "2015",TotalPopulation:  1104000.00,Continent: "Africa",GDPPerCapita: 7758.50},
            {Location: "Ethiopia",Code: "ETH",Year: "2015",TotalPopulation:  1.01E+08,Continent: "Africa",GDPPerCapita: 1533.11},
            {Location: "Faeroe Islands",Code: "FRO",Year: "2015",TotalPopulation:  48000.00,Continent: "Europe"},
            {Location: "Falkland Islands",Code: "FLK",Year: "2015",TotalPopulation:  3000.00,Continent: "South America"},
            {Location: "Fiji",Code: "FJI",Year: "2015",TotalPopulation:  869000.00,Continent: "Oceania",GDPPerCapita: 8477.65},
            {Location: "Finland",Code: "FIN",Year: "2015",TotalPopulation:  5481000.00,Continent: "Europe",GDPPerCapita: 38941.76,AverageHoursWorked: 1637.20},
            {Location: "France",Code: "FRA",Year: "2015",TotalPopulation:  64453000.00,Continent: "Europe",GDPPerCapita: 37766.37,AverageHoursWorked: 1509.41},
            {Location: "French Guiana",Code: "GUF",Year: "2015",TotalPopulation:  261000.00,Continent: "South America"},
            {Location: "French Polynesia",Code: "PYF",Year: "2015",TotalPopulation:  273000.00,Continent: "Oceania"},
            {Location: "French Southern Territories",Code: "ATF",Year: "2015",TotalPopulation:  0.00},
            {Location: "Gabon",Code: "GAB",Year: "2015",TotalPopulation:  1948000.00,Continent: "Africa",GDPPerCapita: 16836.78},
            {Location: "Gambia",Code: "GMB",Year: "2015",TotalPopulation:  2086000.00,Continent: "Africa",GDPPerCapita: 1568.04},
            {Location: "Georgia",Code: "GEO",Year: "2015",TotalPopulation:  4024000.00,Continent: "Asia",GDPPerCapita: 9025.13},
            {Location: "Germany",Code: "DEU",Year: "2015",TotalPopulation:  81787000.00,Continent: "Europe",GDPPerCapita: 43937.95,AverageHoursWorked: 1368.11},
            {Location: "Ghana",Code: "GHA",Year: "2015",TotalPopulation:  27849000.00,Continent: "Africa",GDPPerCapita: 3926.71},
            {Location: "Gibraltar",Code: "GIB",Year: "2015",TotalPopulation:  34000.00,Continent: "Europe"},
            {Location: "Greece",Code: "GRC",Year: "2015",TotalPopulation:  10660000.00,Continent: "Europe",GDPPerCapita: 24170.30,AverageHoursWorked: 2031.14},
            {Location: "Greenland",Code: "GRL",Year: "2015",TotalPopulation:  56000.00,Continent: "North America"},
            {Location: "Grenada",Code: "GRD",Year: "2015",TotalPopulation:  110000.00,Continent: "North America",GDPPerCapita: 12757.97},
            {Location: "Guadeloupe",Code: "GLP",Year: "2015",TotalPopulation:  400000.00,Continent: "North America"},
            {Location: "Guam",Code: "GUM",Year: "2015",TotalPopulation:  162000.00,Continent: "Oceania"},
            {Location: "Guatemala",Code: "GTM",Year: "2015",TotalPopulation:  16252000.00,Continent: "North America",GDPPerCapita: 7292.72},
            {Location: "Guernsey",Code: "GGY",Year: "2015",TotalPopulation:  0.00},
            {Location: "Guinea",Code: "GIN",Year: "2015",TotalPopulation:  11432000.00,Continent: "Africa",GDPPerCapita: 1758.32},
            {Location: "Guinea-Bissau",Code: "GNB",Year: "2015",TotalPopulation:  1737000.00,Continent: "Africa",GDPPerCapita: 1446.49},
            {Location: "Guyana",Code: "GUY",Year: "2015",TotalPopulation:  767000.00,Continent: "South America",GDPPerCapita: 7076.94},
            {Location: "Haiti",Code: "HTI",Year: "2015",TotalPopulation:  10696000.00,Continent: "North America",GDPPerCapita: 1651.23},
            {Location: "Hanover",Code: "OWID_HAN",Year: "2015",TotalPopulation:  0.00},
            {Location: "Heard Island and McDonald Islands",Code: "HMD",Year: "2015",TotalPopulation:  0.00},
            {Location: "Hesse Electoral",Code: "OWID_HSE",Year: "2015",TotalPopulation:  0.00},
            {Location: "Hesse Grand Ducal",Code: "OWID_HSG",Year: "2015",TotalPopulation:  0.00},
            {Location: "Honduras",Code: "HND",Year: "2015",TotalPopulation:  9113000.00,Continent: "North America",GDPPerCapita: 4319.47},
            {Location: "Hong Kong",Code: "HKG",Year: "2015",TotalPopulation:  7186000.00,Continent: "Asia",GDPPerCapita: 53591.84,AverageHoursWorked: 2185.58},
            {Location: "Hungary",Code: "HUN",Year: "2015",TotalPopulation:  9778000.00,Continent: "Europe",GDPPerCapita: 25034.45,AverageHoursWorked: 1923.72},
            {Location: "Iceland",Code: "ISL",Year: "2015",TotalPopulation:  330000.00,Continent: "Europe",GDPPerCapita: 43048.13,AverageHoursWorked: 1509.17},
            {Location: "India",Code: "IND",Year: "2015",TotalPopulation:  1.31E+09,Continent: "Asia",GDPPerCapita: 5756.67,AverageHoursWorked: 2117.01},
            {Location: "Indonesia",Code: "IDN",Year: "2015",TotalPopulation:  2.58E+08,Continent: "Asia",GDPPerCapita: 10367.70,AverageHoursWorked: 2024.29},
            {Location: "Iran",Code: "IRN",Year: "2015",TotalPopulation:  78492000.00,Continent: "Asia",GDPPerCapita: 16500.90},
            {Location: "Iraq",Code: "IRQ",Year: "2015",TotalPopulation:  35572000.00,Continent: "Asia",GDPPerCapita: 15072.87},
            {Location: "Ireland",Code: "IRL",Year: "2015",TotalPopulation:  4652000.00,Continent: "Europe",GDPPerCapita: 60818.05,AverageHoursWorked: 1740.53},
            {Location: "Isle of Man",Code: "IMN",Year: "2015",TotalPopulation:  83000.00,Continent: "Europe"},
            {Location: "Israel",Code: "ISR",Year: "2015",TotalPopulation:  7978000.00,Continent: "Asia",GDPPerCapita: 32024.35,AverageHoursWorked: 1895.46},
            {Location: "Italy",Code: "ITA",Year: "2015",TotalPopulation:  60578000.00,Continent: "Europe",GDPPerCapita: 34302.04,AverageHoursWorked: 1718.00},
            {Location: "Jamaica",Code: "JAM",Year: "2015",TotalPopulation:  2891000.00,Continent: "North America",GDPPerCapita: 8095.26},
            {Location: "Japan",Code: "JPN",Year: "2015",TotalPopulation:  1.28E+08,Continent: "Asia",GDPPerCapita: 37882.98,AverageHoursWorked: 1750.90},
            {Location: "Jersey",Code: "JEY",Year: "2015",TotalPopulation:  0.00},
            {Location: "Jordan",Code: "JOR",Year: "2015",TotalPopulation:  9267000.00,Continent: "Asia",GDPPerCapita: 8491.05},
            {Location: "Kazakhstan",Code: "KAZ",Year: "2015",TotalPopulation:  17572000.00,Continent: "Asia",GDPPerCapita: 23524.06},
            {Location: "Kenya",Code: "KEN",Year: "2015",TotalPopulation:  47878000.00,Continent: "Africa",GDPPerCapita: 2836.00},
            {Location: "Kiribati",Code: "KIR",Year: "2015",TotalPopulation:  111000.00,Continent: "Oceania",GDPPerCapita: 1967.30},
            {Location: "Kosovo",Code: "OWID_KOS",Year: "2015",TotalPopulation:  0.00,Continent: "Europe"},
            {Location: "Kuwait",Code: "KWT",Year: "2015",TotalPopulation:  3836000.00,Continent: "Asia",GDPPerCapita: 68476.33},
            {Location: "Kyrgyzstan",Code: "KGZ",Year: "2015",TotalPopulation:  5959000.00,Continent: "Asia",GDPPerCapita: 3237.60},
            {Location: "Laos",Code: "LAO",Year: "2015",TotalPopulation:  6741000.00,Continent: "Asia",GDPPerCapita: 5755.06},
            {Location: "Latvia",Code: "LVA",Year: "2015",TotalPopulation:  1998000.00,Continent: "Europe",GDPPerCapita: 23018.82,AverageHoursWorked: 1901.74},
            {Location: "Lebanon",Code: "LBN",Year: "2015",TotalPopulation:  6533000.00,Continent: "Asia",GDPPerCapita: 13352.71},
            {Location: "Lesotho",Code: "LSO",Year: "2015",TotalPopulation:  2059000.00,Continent: "Africa",GDPPerCapita: 2708.15},
            {Location: "Liberia",Code: "LBR",Year: "2015",TotalPopulation:  4472000.00,Continent: "Africa",GDPPerCapita: 785.25},
            {Location: "Libya",Code: "LBY",Year: "2015",TotalPopulation:  6418000.00,Continent: "Africa",GDPPerCapita: 14847.20},
            {Location: "Liechtenstein",Code: "LIE",Year: "2015",TotalPopulation:  37000.00,Continent: "Europe"},
            {Location: "Lithuania",Code: "LTU",Year: "2015",TotalPopulation:  2932000.00,Continent: "Europe",GDPPerCapita: 27045.71,AverageHoursWorked: 1859.50},
            {Location: "Luxembourg",Code: "LUX",Year: "2015",TotalPopulation:  567000.00,Continent: "Europe",GDPPerCapita: 94088.59,AverageHoursWorked: 1521.03},
            {Location: "Macao",Code: "MAC",Year: "2015",TotalPopulation:  602000.00,Continent: "Asia",GDPPerCapita: 100444.60},
            {Location: "Madagascar",Code: "MDG",Year: "2015",TotalPopulation:  24234000.00,Continent: "Africa",GDPPerCapita: 1377.17},
            {Location: "Malawi",Code: "MWI",Year: "2015",TotalPopulation:  16745000.00,Continent: "Africa",GDPPerCapita: 1088.70},
            {Location: "Malaysia",Code: "MYS",Year: "2015",TotalPopulation:  30271000.00,Continent: "Asia",GDPPerCapita: 25001.61,AverageHoursWorked: 2238.27},
            {Location: "Maldives",Code: "MDV",Year: "2015",TotalPopulation:  455000.00,Continent: "Asia",GDPPerCapita: 13705.01},
            {Location: "Mali",Code: "MLI",Year: "2015",TotalPopulation:  17439000.00,Continent: "Africa",GDPPerCapita: 1919.23},
            {Location: "Malta",Code: "MLT",Year: "2015",TotalPopulation:  434000.00,Continent: "Europe",GDPPerCapita: 34087.08,AverageHoursWorked: 1964.56},
            {Location: "Marshall Islands",Code: "MHL",Year: "2015",TotalPopulation:  57000.00,Continent: "Oceania",GDPPerCapita: 3665.38},
            {Location: "Martinique",Code: "MTQ",Year: "2015",TotalPopulation:  378000.00,Continent: "North America"},
            {Location: "Mauritania",Code: "MRT",Year: "2015",TotalPopulation:  4046000.00,Continent: "Africa",GDPPerCapita: 3601.61},
            {Location: "Mauritius",Code: "MUS",Year: "2015",TotalPopulation:  1259000.00,Continent: "Africa",GDPPerCapita: 18864.11},
            {Location: "Mayotte",Code: "MYT",Year: "2015",TotalPopulation:  240000.00,Continent: "Africa"},
            {Location: "Mecklenburg Schwerin",Code: "OWID_MEC",Year: "2015",TotalPopulation:  0.00},
            {Location: "Mexico",Code: "MEX",Year: "2015",TotalPopulation:  1.22E+08,Continent: "North America",GDPPerCapita: 16938.61,AverageHoursWorked: 2248.00},
            {Location: "Micronesia (country)",Code: "FSM",Year: "2015",TotalPopulation:  109000.00,Continent: "Oceania",GDPPerCapita: 3271.27},
            {Location: "Modena",Code: "OWID_MOD",Year: "2015",TotalPopulation:  0.00},
            {Location: "Moldova",Code: "MDA",Year: "2015",TotalPopulation:  4071000.00,Continent: "Europe",GDPPerCapita: 4746.79},
            {Location: "Monaco",Code: "MCO",Year: "2015",TotalPopulation:  38000.00,Continent: "Europe"},
            {Location: "Mongolia",Code: "MNG",Year: "2015",TotalPopulation:  2998000.00,Continent: "Asia",GDPPerCapita: 11411.94},
            {Location: "Montenegro",Code: "MNE",Year: "2015",TotalPopulation:  627000.00,Continent: "Europe",GDPPerCapita: 15289.72},
            {Location: "Montserrat",Code: "MSR",Year: "2015",TotalPopulation:  5000.00,Continent: "North America"},
            {Location: "Morocco",Code: "MAR",Year: "2015",TotalPopulation:  34664000.00,Continent: "Africa",GDPPerCapita: 7296.93},
            {Location: "Mozambique",Code: "MOZ",Year: "2015",TotalPopulation:  27042000.00,Continent: "Africa",GDPPerCapita: 1118.22},
            {Location: "Myanmar",Code: "MMR",Year: "2015",TotalPopulation:  52681000.00,Continent: "Asia",GDPPerCapita: 5056.86,AverageHoursWorked: 2437.86},
            {Location: "Nagorno-Karabakh",Code: "OWID_NAG",Year: "2015",TotalPopulation:  0.00},
            {Location: "Namibia",Code: "NAM",Year: "2015",TotalPopulation:  2315000.00,Continent: "Africa",GDPPerCapita: 9975.13},
            {Location: "Nauru",Code: "NRU",Year: "2015",TotalPopulation:  10000.00,Continent: "Oceania",GDPPerCapita: 12270.30},
            {Location: "Nepal",Code: "NPL",Year: "2015",TotalPopulation:  27015000.00,Continent: "Asia",GDPPerCapita: 2314.28},
            {Location: "Netherlands",Code: "NLD",Year: "2015",TotalPopulation:  16938000.00,Continent: "Europe",GDPPerCapita: 46494.36,AverageHoursWorked: 1423.92},
            {Location: "Netherlands Antilles",Code: "ANT",Year: "2015",TotalPopulation:  0.00},
            {Location: "New Caledonia",Code: "NCL",Year: "2015",TotalPopulation:  271000.00,Continent: "Oceania"},
            {Location: "New Zealand",Code: "NZL",Year: "2015",TotalPopulation:  4615000.00,Continent: "Oceania",GDPPerCapita: 35309.82,AverageHoursWorked: 1757.00},
            {Location: "Nicaragua",Code: "NIC",Year: "2015",TotalPopulation:  6223000.00,Continent: "North America",GDPPerCapita: 4956.92},
            {Location: "Niger",Code: "NER",Year: "2015",TotalPopulation:  20002000.00,Continent: "Africa",GDPPerCapita: 908.18},
            {Location: "Nigeria",Code: "NGA",Year: "2015",TotalPopulation:  1.81E+08,Continent: "Africa",GDPPerCapita: 5670.64,AverageHoursWorked: 1703.48},
            {Location: "Niue",Code: "NIU",Year: "2015",TotalPopulation:  2000.00,Continent: "Oceania"},
            {Location: "Norfolk Island",Code: "NFK",Year: "2015",TotalPopulation:  0.00},
            {Location: "North Korea",Code: "PRK",Year: "2015",TotalPopulation:  25184000.00,Continent: "Asia"},
            {Location: "North Macedonia",Code: "MKD",Year: "2015",TotalPopulation:  2079000.00,Continent: "Europe",GDPPerCapita: 12759.82},
            {Location: "Northern Cyprus",Code: "OWID_CYN",Year: "2015",TotalPopulation:  0.00},
            {Location: "Northern Mariana Islands",Code: "MNP",Year: "2015",TotalPopulation:  56000.00,Continent: "Oceania"},
            {Location: "Norway",Code: "NOR",Year: "2015",TotalPopulation:  5200000.00,Continent: "Europe",GDPPerCapita: 64008.29,AverageHoursWorked: 1422.56},
            {Location: "Oman",Code: "OMN",Year: "2015",TotalPopulation:  4267000.00,Continent: "Asia",GDPPerCapita: 39873.39},
            {Location: "Pakistan",Code: "PAK",Year: "2015",TotalPopulation:  1.99E+08,Continent: "Asia",GDPPerCapita: 4695.70,AverageHoursWorked: 2096.14},
            {Location: "Palau",Code: "PLW",Year: "2015",TotalPopulation:  18000.00,Continent: "Oceania",GDPPerCapita: 14028.68},
            {Location: "Palestine",Code: "PSE",Year: "2015",TotalPopulation:  4529000.00,Continent: "Asia",GDPPerCapita: 4713.50},
            {Location: "Panama",Code: "PAN",Year: "2015",TotalPopulation:  3968000.00,Continent: "North America",GDPPerCapita: 20786.66},
            {Location: "Papua New Guinea",Code: "PNG",Year: "2015",TotalPopulation:  8108000.00,Continent: "Oceania",GDPPerCapita: 3824.73},
            {Location: "Paraguay",Code: "PRY",Year: "2015",TotalPopulation:  6689000.00,Continent: "South America",GDPPerCapita: 8639.29},
            {Location: "Parma",Code: "OWID_PMA",Year: "2015",TotalPopulation:  0.00},
            {Location: "Peru",Code: "PER",Year: "2015",TotalPopulation:  30471000.00,Continent: "South America",GDPPerCapita: 11770.03,AverageHoursWorked: 1932.46},
            {Location: "Philippines",Code: "PHL",Year: "2015",TotalPopulation:  1.02E+08,Continent: "Asia",GDPPerCapita: 6874.58,AverageHoursWorked: 2148.57},
            {Location: "Pitcairn",Code: "PCN",Year: "2015",TotalPopulation:  0.00},
            {Location: "Poland",Code: "POL",Year: "2015",TotalPopulation:  38034000.00,Continent: "Europe",GDPPerCapita: 25299.97,AverageHoursWorked: 2049.01},
            {Location: "Portugal",Code: "PRT",Year: "2015",TotalPopulation:  10368000.00,Continent: "Europe",GDPPerCapita: 26607.83,AverageHoursWorked: 1874.92},
            {Location: "Puerto Rico",Code: "PRI",Year: "2015",TotalPopulation:  3382000.00,Continent: "North America",GDPPerCapita: 35291.84},
            {Location: "Qatar",Code: "QAT",Year: "2015",TotalPopulation:  2566000.00,Continent: "Asia",GDPPerCapita: 119749.40},
            {Location: "Republic of Vietnam",Code: "OWID_RVN",Year: "2015",TotalPopulation:  0.00},
            {Location: "Reunion",Code: "REU",Year: "2015",TotalPopulation:  863000.00,Continent: "Africa"},
            {Location: "Romania",Code: "ROU",Year: "2015",TotalPopulation:  19925000.00,Continent: "Europe",GDPPerCapita: 20556.00,AverageHoursWorked: 1785.67},
            {Location: "Russia",Code: "RUS",Year: "2015",TotalPopulation:  1.45E+08,Continent: "Europe",GDPPerCapita: 24516.55,AverageHoursWorked: 1978.00},
            {Location: "Rwanda",Code: "RWA",Year: "2015",TotalPopulation:  11369000.00,Continent: "Africa",GDPPerCapita: 1731.04},
            {Location: "Saint BarthÃ©lemy",Code: "BLM",Year: "2015",TotalPopulation:  0.00},
            {Location: "Saint Helena",Code: "SHN",Year: "2015",TotalPopulation:  6000.00,Continent: "Africa"},
            {Location: "Saint Kitts and Nevis",Code: "KNA",Year: "2015",TotalPopulation:  51000.00,Continent: "North America",GDPPerCapita: 24169.86},
            {Location: "Saint Lucia",Code: "LCA",Year: "2015",TotalPopulation:  179000.00,Continent: "North America",GDPPerCapita: 12522.04},
            {Location: "Saint Martin (French part)",Code: "MAF",Year: "2015",TotalPopulation:  36000.00,Continent: "North America"},
            {Location: "Saint Pierre and Miquelon",Code: "SPM",Year: "2015",TotalPopulation:  6000.00,Continent: "North America"},
            {Location: "Saint Vincent and the Grenadines",Code: "VCT",Year: "2015",TotalPopulation:  109000.00,Continent: "North America",GDPPerCapita: 10468.26},
            {Location: "Samoa",Code: "WSM",Year: "2015",TotalPopulation:  194000.00,Continent: "Oceania",GDPPerCapita: 5558.79},
            {Location: "San Marino",Code: "SMR",Year: "2015",TotalPopulation:  33000.00,Continent: "Europe",GDPPerCapita: 56372.36},
            {Location: "Sao Tome and Principe",Code: "STP",Year: "2015",TotalPopulation:  199000.00,Continent: "Africa",GDPPerCapita: 2947.51},
            {Location: "Saudi Arabia",Code: "SAU",Year: "2015",TotalPopulation:  31718000.00,Continent: "Asia",GDPPerCapita: 50723.71},
            {Location: "Saxony",Code: "OWID_SAX",Year: "2015",TotalPopulation:  0.00},
            {Location: "Senegal",Code: "SEN",Year: "2015",TotalPopulation:  14578000.00,Continent: "Africa",GDPPerCapita: 2293.85},
            {Location: "Serbia",Code: "SRB",Year: "2015",TotalPopulation:  8877000.00,Continent: "Europe",GDPPerCapita: 13277.80},
            {Location: "Serbia and Montenegro",Code: "OWID_SRM",Year: "2015",TotalPopulation:  0.00},
            {Location: "Serbia excluding Kosovo",Code: "OWID_SEK",Year: "2015",TotalPopulation:  0.00},
            {Location: "Seychelles",Code: "SYC",Year: "2015",TotalPopulation:  95000.00,Continent: "Africa",GDPPerCapita: 24856.56},
            {Location: "Sierra Leone",Code: "SLE",Year: "2015",TotalPopulation:  7172000.00,Continent: "Africa",GDPPerCapita: 1314.27},
            {Location: "Singapore",Code: "SGP",Year: "2015",TotalPopulation:  5592000.00,Continent: "Asia",GDPPerCapita: 81741.10,AverageHoursWorked: 2263.15},
            {Location: "Sint Maarten (Dutch part)",Code: "SXM",Year: "2015",TotalPopulation:  40000.00,Continent: "North America"},
            {Location: "Slovakia",Code: "SVK",Year: "2015",TotalPopulation:  5436000.00,Continent: "Europe",GDPPerCapita: 28308.88,AverageHoursWorked: 1754.09},
            {Location: "Slovenia",Code: "SVN",Year: "2015",TotalPopulation:  2071000.00,Continent: "Europe",GDPPerCapita: 29037.74,AverageHoursWorked: 1687.86},
            {Location: "Solomon Islands",Code: "SLB",Year: "2015",TotalPopulation:  603000.00,Continent: "Oceania",GDPPerCapita: 2149.22},
            {Location: "Somalia",Code: "SOM",Year: "2015",TotalPopulation:  13797000.00,Continent: "Africa"},
            {Location: "Somaliland",Code: "OWID_SML",Year: "2015",TotalPopulation:  0.00},
            {Location: "South Africa",Code: "ZAF",Year: "2015",TotalPopulation:  55386000.00,Continent: "Africa",GDPPerCapita: 12377.66,AverageHoursWorked: 2209.09},
            {Location: "South Georgia and the South Sandwich Islands",Code: "SGS",Year: "2015",TotalPopulation:  0.00},
            {Location: "South Korea",Code: "KOR",Year: "2015",TotalPopulation:  50823000.00,Continent: "Asia",GDPPerCapita: 34177.65,AverageHoursWorked: 2076.30},
            {Location: "South Ossetia",Code: "OWID_SOS",Year: "2015",TotalPopulation:  0.00},
            {Location: "South Sudan",Code: "SSD",Year: "2015",TotalPopulation:  10716000.00,Continent: "Africa",GDPPerCapita: 1875.38},
            {Location: "Spain",Code: "ESP",Year: "2015",TotalPopulation:  46672000.00,Continent: "Europe",GDPPerCapita: 32291.16,AverageHoursWorked: 1699.50},
            {Location: "Sri Lanka",Code: "LKA",Year: "2015",TotalPopulation:  20908000.00,Continent: "Asia",GDPPerCapita: 11079.71,AverageHoursWorked: 1923.94},
            {Location: "Sudan",Code: "SDN",Year: "2015",TotalPopulation:  38903000.00,Continent: "Africa",GDPPerCapita: 4290.37},
            {Location: "Suriname",Code: "SUR",Year: "2015",TotalPopulation:  559000.00,Continent: "South America",GDPPerCapita: 14766.80},
            {Location: "Svalbard and Jan Mayen",Code: "SJM",Year: "2015",TotalPopulation:  0.00},
            {Location: "Sweden",Code: "SWE",Year: "2015",TotalPopulation:  9765000.00,Continent: "Europe",GDPPerCapita: 45679.28,AverageHoursWorked: 1610.07},
            {Location: "Switzerland",Code: "CHE",Year: "2015",TotalPopulation:  8297000.00,Continent: "Europe",GDPPerCapita: 57264.16,AverageHoursWorked: 1589.48},
            {Location: "Syria",Code: "SYR",Year: "2015",TotalPopulation:  17997000.00,Continent: "Asia"},
            {Location: "Taiwan",Code: "TWN",Year: "2015",TotalPopulation:  23557000.00,Continent: "Asia",GDPPerCapita: 0.00},
            {Location: "Tajikistan",Code: "TJK",Year: "2015",TotalPopulation:  8454000.00,Continent: "Asia",GDPPerCapita: 2640.59},
            {Location: "Tanzania",Code: "TZA",Year: "2015",TotalPopulation:  51483000.00,Continent: "Africa",GDPPerCapita: 2490.96},
            {Location: "Thailand",Code: "THA",Year: "2015",TotalPopulation:  68715000.00,Continent: "Asia",GDPPerCapita: 15252.23,AverageHoursWorked: 2185.45},
            {Location: "Timor",Code: "TLS",Year: "2015",TotalPopulation:  1196000.00,Continent: "Asia",GDPPerCapita: 7398.84},
            {Location: "Togo",Code: "TGO",Year: "2015",TotalPopulation:  7323000.00,Continent: "Africa",GDPPerCapita: 1351.05},
            {Location: "Tokelau",Code: "TKL",Year: "2015",TotalPopulation:  1000.00,Continent: "Oceania"},
            {Location: "Tonga",Code: "TON",Year: "2015",TotalPopulation:  101000.00,Continent: "Oceania",GDPPerCapita: 5189.84},
            {Location: "Transnistria",Code: "OWID_TRS",Year: "2015",TotalPopulation:  0.00},
            {Location: "Trinidad and Tobago",Code: "TTO",Year: "2015",TotalPopulation:  1370000.00,Continent: "North America",GDPPerCapita: 31524.59},
            {Location: "Tunisia",Code: "TUN",Year: "2015",TotalPopulation:  11180000.00,Continent: "Africa",GDPPerCapita: 10765.89},
            {Location: "Turkey",Code: "TUR",Year: "2015",TotalPopulation:  78529000.00,Continent: "Asia",GDPPerCapita: 23388.48,AverageHoursWorked: 1832.00},
            {Location: "Turkmenistan",Code: "TKM",Year: "2015",TotalPopulation:  5565000.00,Continent: "Asia",GDPPerCapita: 14992.32},
            {Location: "Turks and Caicos Islands",Code: "TCA",Year: "2015",TotalPopulation:  36000.00,Continent: "North America"},
            {Location: "Tuscany",Code: "OWID_TUS",Year: "2015",TotalPopulation:  0.00},
            {Location: "Tuvalu",Code: "TUV",Year: "2015",TotalPopulation:  11000.00,Continent: "Oceania",GDPPerCapita: 3419.20},
            {Location: "Two Sicilies",Code: "OWID_SIC",Year: "2015",TotalPopulation:  0.00},
            {Location: "USSR",Code: "OWID_USS",Year: "2015",TotalPopulation:  0.00},
            {Location: "Uganda",Code: "UGA",Year: "2015",TotalPopulation:  38225000.00,Continent: "Africa",GDPPerCapita: 1665.95},
            {Location: "Ukraine",Code: "UKR",Year: "2015",TotalPopulation:  44922000.00,Continent: "Europe",GDPPerCapita: 7464.94},
            {Location: "United Arab Emirates",Code: "ARE",Year: "2015",TotalPopulation:  9263000.00,Continent: "Asia",GDPPerCapita: 66569.40},
            {Location: "United Kingdom",Code: "GBR",Year: "2015",TotalPopulation:  65860000.00,Continent: "Europe",GDPPerCapita: 38839.17,AverageHoursWorked: 1669.08},
            {Location: "United Korea",Code: "OWID_KRU",Year: "2015",TotalPopulation:  0.00},
            {Location: "United States",Code: "USA",Year: "2015",TotalPopulation:  3.21E+08,Continent: "North America",GDPPerCapita: 53005.64,AverageHoursWorked: 1765.18},
            {Location: "United States Minor Outlying Islands",Code: "UMI",Year: "2015",TotalPopulation:  0.00},
            {Location: "United States Virgin Islands",Code: "VIR",Year: "2015",TotalPopulation:  105000.00,Continent: "North America"},
            {Location: "Uruguay",Code: "URY",Year: "2015",TotalPopulation:  3412000.00,Continent: "South America",GDPPerCapita: 19831.45,AverageHoursWorked: 1552.35},
            {Location: "Uzbekistan",Code: "UZB",Year: "2015",TotalPopulation:  30930000.00,Continent: "Asia",GDPPerCapita: 5700.24},
            {Location: "Vanuatu",Code: "VUT",Year: "2015",TotalPopulation:  271000.00,Continent: "Oceania",GDPPerCapita: 2806.79},
            {Location: "Vatican",Code: "VAT",Year: "2015",TotalPopulation:  1000.00,Continent: "Europe"},
            {Location: "Venezuela",Code: "VEN",Year: "2015",TotalPopulation:  30082000.00,Continent: "South America"},
            {Location: "Vietnam",Code: "VNM",Year: "2015",TotalPopulation:  92677000.00,Continent: "Asia",GDPPerCapita: 5554.86,AverageHoursWorked: 2169.59},
            {Location: "Wallis and Futuna",Code: "WLF",Year: "2015",TotalPopulation:  12000.00,Continent: "Oceania"},
            {Location: "West Germany",Code: "OWID_GFR",Year: "2015",TotalPopulation:  0.00},
            {Location: "Western Sahara",Code: "ESH",Year: "2015",TotalPopulation:  526000.00,Continent: "Africa"},
            {Location: "Wuerttemburg",Code: "OWID_WRT",Year: "2015",TotalPopulation:  0.00},
            {Location: "Yemen",Code: "YEM",Year: "2015",TotalPopulation:  26498000.00,Continent: "Asia",GDPPerCapita: 2308.64},
            {Location: "Yemen Arab Republic",Code: "OWID_YAR",Year: "2015",TotalPopulation:  0.00},
            {Location: "Yemen People's Republic",Code: "OWID_YPR",Year: "2015",TotalPopulation:  0.00},
            {Location: "Yugoslavia",Code: "OWID_YGS",Year: "2015",TotalPopulation:  0.00},
            {Location: "Zambia",Code: "ZMB",Year: "2015",TotalPopulation:  15879000.00,Continent: "Africa",GDPPerCapita: 3627.20},
            {Location: "Zanzibar",Code: "OWID_ZAN",Year: "2015",TotalPopulation:  0.00},
            {Location: "Zimbabwe",Code: "ZWE",Year: "2015",TotalPopulation:  13815000.00,Continent: "Africa",GDPPerCapita: 1912.28},
            {Location: "Ã…land Islands", Code: "ALA", Year: "2015", TotalPopulation: 0.00 },
        ];

        this.africaDataSource = [];
        this.europeDataSource = [];
        this.asiaDataSource = [];
        this.northAmericaDataSource = [];
        this.oceaniaDataSource = [];
        this.southAmericaDataSource = [];

        for (let i = 0; i < data.length; i++) {
            const item = data[i];

            if (item.Continent === "Africa") {
                this.africaDataSource.push(item);
            }
            if (item.Continent === "Europe") {
                this.europeDataSource.push(item);
            }
            if (item.Continent === "Asia") {
                this.asiaDataSource.push(item);
            }
            if (item.Continent === "North America") {
                this.northAmericaDataSource.push(item);
            }
            if (item.Continent === "Oceania") {
                this.oceaniaDataSource.push(item);
            }
            if (item.Continent === "South America") {
                this.southAmericaDataSource.push(item);
            }
        }

        const sizeScale1 = new IgxSizeScaleComponent();
        sizeScale1.minimumValue = 10;
        sizeScale1.maximumValue = 30;

        const sizeScale2 = new IgxSizeScaleComponent();
        sizeScale2.minimumValue = 10;
        sizeScale2.maximumValue = 50;

        const sizeScale3 = new IgxSizeScaleComponent();
        sizeScale3.minimumValue = 10;
        sizeScale3.maximumValue = 30;

        const sizeScale4 = new IgxSizeScaleComponent();
        sizeScale4.minimumValue = 10;
        sizeScale4.maximumValue = 40;

        const sizeScale5 = new IgxSizeScaleComponent();
        sizeScale5.minimumValue = 10;
        sizeScale5.maximumValue = 20;

        const sizeScale6 = new IgxSizeScaleComponent();
        sizeScale6.minimumValue = 10;
        sizeScale6.maximumValue = 30;

        this.series1.radiusScale = sizeScale1;
        this.series2.radiusScale = sizeScale2;
        this.series3.radiusScale = sizeScale3;
        this.series4.radiusScale = sizeScale4;
        this.series5.radiusScale = sizeScale5;
        this.series6.radiusScale = sizeScale6;

    }
}
