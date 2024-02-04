import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString : string, propName: string): unknown {
    if (value.length === 0 || filterString === "" ){
      return value;
    }
    const resultArray = [];
    console.log(value);
    for (const item of value){
      console.log(item)
      if(item[propName] === filterString){
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
