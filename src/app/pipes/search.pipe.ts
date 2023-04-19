import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'search',
    pure: false
})
export class SearchPipe implements PipeTransform {

    constructor() { }
    transform(objects: any[], searchType:string, searchString:string): any[] {
        if(objects)
        {
            return objects.filter(object => {
                return object[searchType] == searchString;
            });

        }

    }

}
