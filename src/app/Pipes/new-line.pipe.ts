import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newLine'
})
export class NewLinePipe implements PipeTransform {

  transform(value: string): string {
    const splittedText = value.replace(/[.*]/g, '.<br>');
    return `${splittedText}`;
  }

}
