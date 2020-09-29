import { AfterViewInit, Component, TemplateRef, ViewChild, ChangeDetectorRef } from "@angular/core";
import { IgxGeographicHighDensityScatterSeriesComponent, ArcGISOnlineMapImagery, IgxArcGISOnlineMapImagery
} from "igniteui-angular-maps";
import { IgxGeographicMapComponent } from "igniteui-angular-maps";
import { EsriUtility, EsriStyle } from "../../utilities/EsriUtility";
import { MapUtility, MapRegion } from "../../utilities/MapUtility";
import { IgxRectChangedEventArgs } from 'igniteui-angular-core';

@Component({
  selector: "app-map-navigation",
  styleUrls: ["./map-navigation.component.scss"],
  templateUrl: "./map-navigation.component.html"
})

export class MapNavigationComponent implements AfterViewInit {

    public isRunning: boolean;
    public regionType: string = "United States";
    @ViewChild("map", {static: true})
    public geoMap: IgxGeographicMapComponent;
    @ViewChild("template", {static: true})
    public tooltip: TemplateRef<object>;
    public geoRect: any;
    public geoTop: string;
    public geoLeft: string;
    public geoHeight: string;
    public geoWidth: string;
    public winTop: string;
    public winLeft: string;
    public winHeight: string;
    public winWidth: string;
    public posHorizontal: number;
    public posVertical: number;
    public scale: number;
    public mapHoverLongitude: string = "0.0°W";
    public mapHoverLatitude: string = "0.0°S";
    public mapHoverX: string = "0.0000";
    public mapHoverY: string = "0.0000";
    public mapHoverPixelX = "0 px";
    public mapHoverPixelY = "0 px";
    public NavigationOptions: Element[] = [];
    public NavigationRegions: any = {};
    
    constructor(private ref: ChangeDetectorRef) {
        
        const regions =  MapUtility.getRegions();
        for (const key in regions) {
            if (regions.hasOwnProperty(key)) {
                const region = regions[key];
                const name = region.name;
                this.NavigationRegions[name] = region;                
            }
        }
    }
    
    public ngAfterViewInit(): void {
        this.componentDidMount();

        if (this.geoMap !== undefined) {
            console.log("ngAfterViewInit map");
            this.geoMap.actualWindowRectChanged.subscribe((e: IgxRectChangedEventArgs) =>
                this.onMapWindowRectChanged(this.geoMap, e)
            );            

            this.geoMap.zoomToGeographic({ left:-134.5, top:16.5, width:70.0, height:37.0 });           
       
            const tileSource = new IgxArcGISOnlineMapImagery();
            tileSource.mapServerUri = EsriUtility.getUri(EsriStyle.WorldOceansMap);
            // or
            // tileSource.mapServerUri = "https://services.arcgisonline.com/ArcGIS/rest/services/Ocean_Basemap/MapServer";
            this.geoMap.backgroundContent = tileSource;
            this.geoMap.windowPositionHorizontal = 0.1;
            this.geoMap.windowPositionVertical = 0.1;
            this.geoMap.windowScale = 0.1;
        }
    }

    public onMapWindowRectChanged(geoMap: IgxGeographicMapComponent, e: any) {

        // converting window rect to geographic rect/region:
        const geoRect: any = geoMap.getGeographicFromZoom(e.args.newRect);
        geoRect.bottom = geoRect.top + geoRect.height;
        geoRect.right = geoRect.left + geoRect.width;
        // calculating center of geographic region
        geoRect.longitude = geoRect.left + (geoRect.width / 2);
        geoRect.latitude = geoRect.top + (geoRect.height / 2);
        this.geoRect = geoRect; 

        const h = geoMap.actualWindowPositionHorizontal        
        const v = geoMap.actualWindowPositionVertical;
        const s = geoMap.actualWindowScale;
     
        this.geoTop = MapUtility.toLat(this.geoRect.top);
        this.geoLeft = MapUtility.toLng(this.geoRect.left);
        this.geoHeight = MapUtility.toLng(this.geoRect.height);
        this.geoWidth = MapUtility.toLng(this.geoRect.width);
       
        this.winTop = e.args.newRect.top.toFixed(4);
        this.winLeft = e.args.newRect.left.toFixed(4);
        this.winHeight = e.args.newRect.height.toFixed(4);
        this.winWidth = e.args.newRect.width.toFixed(4);
       
        this.posHorizontal = parseFloat(h.toFixed(4));
        this.posVertical = parseFloat(v.toFixed(4));
        this.scale = parseFloat(s.toFixed(4));

        this.ref.detectChanges();       
    }

    public onMapMouseMove = (e: any) => {
        const bounds = e.target.getBoundingClientRect();
        const relativeCoordinate = {
            x: e.clientX - bounds.left,
            y: e.clientY - bounds.top
        };

        const windowCoordinate = {
            x: (e.clientX - bounds.left) / bounds.width,
            y: (e.clientY - bounds.top) / bounds.height
        };
        
        // converting mouse pixel coordinate to geographic coordinate:
        const geoCoordinate: any = this.geoMap.getGeographicPoint(relativeCoordinate);

        this.mapHoverLongitude = MapUtility.toLng(geoCoordinate.x);
        this.mapHoverLatitude = MapUtility.toLat(geoCoordinate.y);
        this.mapHoverX = windowCoordinate.x.toFixed(4);
        this.mapHoverY = windowCoordinate.y.toFixed(4);
        this.mapHoverPixelX = MapUtility.toPixel(relativeCoordinate.x);
        this.mapHoverPixelY = MapUtility.toPixel(relativeCoordinate.y);
        
        this.ref.detectChanges();       
    }

    public componentDidMount() {
        const elem = document.getElementById('map');
        elem.addEventListener('mousemove', this.onMapMouseMove, false);
    }

    public onSelectionChanged = (e: any) =>{
        if (this.geoMap === undefined) return;

        const name = e.target.value.toString();
        const region = this.NavigationRegions[name];

        this.geoMap.zoomToGeographic(region);
    }    
}
