import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString: string, propName: string): unknown {
    if(value.length === 0 || filterString === ''){
      return value;
    }
    const filterStr = filterString.toLocaleLowerCase();
    const prop = propName.toLocaleLowerCase();
    const resultArray = []
    for( const item of value){
      if( item[propName||prop].toLocaleLowerCase().includes(filterStr)){
        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
