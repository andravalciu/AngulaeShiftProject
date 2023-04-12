import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: unknown, args?: any): any {
    if(!value) return null;
    if(!args) return value;
console.log(value, args)
    args = args.toLowerCase();
    return (value as any[]).filter((item:any)=>{
      return JSON.stringify(item).toLowerCase().includes(args)
      
    }
  )}

}
