import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'splitString'
})
export class SplitStringPipe implements PipeTransform {

  transform(value: string): string {
    const replacedText = value.replace( '00:00:00','' );
    return `${ replacedText }`;
  }

}
