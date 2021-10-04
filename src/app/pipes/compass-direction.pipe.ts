import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'compassDirection',
})
export class CompassDirectionPipe implements PipeTransform {
  directions: string[] = [
    'N',
    'NNE',
    'NE',
    'ENE',
    'E',
    'ESE',
    'SE',
    'SSE',
    'S',
    'SSW',
    'SW',
    'WSW',
    'W',
    'WNW',
    'NW',
    'NNW',
  ];
  transform(value: number): string {
    let val = Math.floor(value / 22.5 + 0.5);
    return this.directions[val % 16];
  }
}
