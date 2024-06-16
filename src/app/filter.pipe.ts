import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appFilter', standalone: true })
export class FilterPipe implements PipeTransform {
  /**
   * Pipe filters the list of elements based on the search text provided
   *
   * @param items list of elements to search in
   * @param searchText search string
   * @returns list of elements filtered by search text or []
   */
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return [];
    }
    searchText = searchText.toLocaleLowerCase();

    return items.filter((it) => {
      return it.title.toLocaleLowerCase().includes(searchText) ||
       it.color.toLocaleLowerCase().includes(searchText) ||
       it.description.toLocaleLowerCase().includes(searchText) 
       ;
    });
  }
}