import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppertable'
})
export class UppertablePipe implements PipeTransform {

  transform(value: string[]): string[] {
    return value.map((element) => element.toUpperCase())
  }

}
