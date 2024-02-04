import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any): any {
    // var res : string[] = value.split("");
    // res.reverse();
    // return res.join("");
    return value.split("").reverse().join('');
  }

}
