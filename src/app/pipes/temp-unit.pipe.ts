import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tempUnit',
})
export class TempUnitPipe implements PipeTransform {
  transform(value: number, unit: string): string {
    let retValue = (val: number, u: string): string => `${val.toFixed(1)}°${u}`;

    switch (unit) {
      case 'F':
        //weather-service defaults to imperial
        return retValue(value, 'F');
      case 'C':
        let res = ((value - 32) * 5) / 9;
        return retValue(res, 'C');
      default:
        return 'N/A';
    }
  }
}
