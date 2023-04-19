import { Pipe, PipeTransform } from '@angular/core';
const PADDING = "000000";
@Pipe({
  name: 'numberFormat',
  pure: false
})
export class NumberPipe implements PipeTransform {

  private DECIMAL_SEPARATOR: string;
  private THOUSANDS_SEPARATOR: string;
  constructor() {

  }
  transform(object: any, currentLang:string): any {
    if(object) {
      if (currentLang == 'mk')
      {
        var tmp = object.split('.');
        return tmp[0].split(',').join('.') + "," + tmp[1];
      }
      else
        return object;

    }
    return '';
  }

  trans(value: string, fractionSize: number = 2, lang:string): string {
    if ( value === '0') {
      return lang === 'en' ? '0.00' : '0,00';
    }
    if (lang == 'en')
    {
      this.DECIMAL_SEPARATOR = ".";
      this.THOUSANDS_SEPARATOR = ",";
    }
    else
    {
      this.DECIMAL_SEPARATOR = ",";
      this.THOUSANDS_SEPARATOR = ".";
    }

    let [ integer, fraction = "" ] = (value || "")
      .toString().split(this.DECIMAL_SEPARATOR);

    fraction = fractionSize > 0
      ? this.DECIMAL_SEPARATOR + (fraction + PADDING).substring(0, fractionSize)
      : "";

    integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, this.THOUSANDS_SEPARATOR);

    return integer + fraction;
  }

  parse(value: string, fractionSize: number = 2, lang:string): string {

    if (lang == 'en')
    {
      this.DECIMAL_SEPARATOR = ".";
      this.THOUSANDS_SEPARATOR = ",";
    }
    else
    {
      this.DECIMAL_SEPARATOR = ",";
      this.THOUSANDS_SEPARATOR = ".";

    }

    var tmp = value.split(this.DECIMAL_SEPARATOR);
    return tmp[0].split(this.THOUSANDS_SEPARATOR).join('') + '.' + tmp[1];

  }

  
}
