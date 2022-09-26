import { Pipe, PipeTransform } from '@angular/core';
import { FlightResult } from '../models/flight-result.model';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], args: any[]): FlightResult[] {
    const propName = args[0]
    const filterString = args[1]
    const resultArray = []

    if(value.length == 0 || propName == '' || filterString == ''){
      return value;
    }

    for(const item of value){
      if(item[propName] === filterString){
        resultArray.push(item)
      }
    }
    return resultArray;
  }

}
