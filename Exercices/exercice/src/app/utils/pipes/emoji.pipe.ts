import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'emoji',
})
export class EmojiPipe implements PipeTransform {
  transform(bool: boolean): string {
    return bool ? '👍' : '👎';
  }
}
