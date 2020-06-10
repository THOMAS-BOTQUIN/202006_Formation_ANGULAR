import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): number {
    if (value) {
      if (args.length > 0) {
        return value.totalTTC()
      }
      return value.totalHT();
    }
    return null;
  }

}
