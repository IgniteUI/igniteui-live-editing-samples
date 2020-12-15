import { Injectable } from "@angular/core";

@Injectable()
export class SampleDensityData {

    public static create(): any[] {
        const amount = 25000;
        const data: any[] = [];
        // generating a lot of data points that spread from specified X/Y center
        data.concat(this.generate(amount / 2, 0, 0, 75000, 20000));
        data.concat(this.generate(amount / 4, 0, 0, 100000, 25000));
        data.concat(this.generate(amount / 8, 0, 0, 150000, 30000));
        data.concat(this.generate(amount / 8, 0, 0, 200000, 75000));
        return data;
    }

    public static generate(count: number, centerX: number, centerY: number, spreadX: number, spreadY: number): any[] {
        const data: any[] = [];
        for (let i = 0; i <= count; i++) {
            let rangeX = Math.random() * spreadX;
            let rangeY = Math.random() * spreadY;
            const flip = 1;
            const prop = Math.random();
            if (prop < .25) {
                rangeX *= flip;
                rangeY *= flip;
            } else if (prop >= .25 && prop < .5) {
                rangeX *= -flip;
                rangeY *= flip;
            } else if (prop >= .5 && prop < .75) {
                rangeX *= flip;
                rangeY *= -flip;
            } else {
                rangeX *= -flip;
                rangeY *= -flip;
            }
            const dispersionX = Math.random() + 0.12;
            const dispersionY = Math.random() + 0.12;
            const x = centerX + (rangeX * dispersionX);
            const y = centerY + (rangeY * dispersionY);
            data.push({ X: x, Y: y });
        }
        return data;
    }
}
