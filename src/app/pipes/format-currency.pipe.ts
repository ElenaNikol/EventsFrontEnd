import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatCurrency'
})
export class FormatCurrencyPipe implements PipeTransform {

  // format 1.000,00 send false
  // format 1,000.00 send true
  transform(value: string, us?: boolean): string {

    if(value!="" && value!= undefined && value.length!=0 && (value.includes(",") || value.includes(".")) ){
      value = value.substring(0, value.length -2);
    }

    if(us) {
      if(value) {
        let ost = ".00"
        value = value.split(".").join("")
        value = value.split(",").join("");
        return value.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ost;
      }
    } else {
      if(value) {
        let ost = ",00"
        value = value.split(".").join("")
        value = value.split(",").join("");
        return value.replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ost;
      }
    }
    if(value){
      return value.slice(0, value.indexOf(",")).replace(/\B(?=(\d{3})+(?!\d))/g, ".") + value.slice(value.indexOf(","));

    }
  }
}
