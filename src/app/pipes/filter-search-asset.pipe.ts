import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterSearchAsset'
})
export class FilterSearchAssetPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg.length === 0 || arg === '') {
      return value;
    }
    const resultArray = [];
    for (const post of value) {
      if (post.name_asset.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultArray.push(post);
      }
    }
    return resultArray;

  }
}
