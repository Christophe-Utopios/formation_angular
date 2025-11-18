import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(value: string[], order: 'asc' | 'desc'): string[] {
    return order === 'asc' ? [...value].sort() : [...value].sort().reverse();
  }
}
