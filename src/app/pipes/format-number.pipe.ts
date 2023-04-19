import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNumber'
})
export class FormatNumberPipe implements PipeTransform {
   // format 1.000,00 send false
  // format 1,000.00 send true
  transform(value: string, us?: boolean): string {
    if(value!="" && value!= undefined && value.length!=0 && (value.includes(",") || value.includes(".")) ){
     var value1 = value.substring(0, value.length -2);
     var  ost1 = value.substring( value.length -2,value.length)

    }else if(value!="" && value!= undefined && value.length!=0){
      var  value1 = value;
      var ost1 = '00';
    }

    if(us) {
      if(value1) {
        let ost = ".00"
        if(ost1){
          ost ="." + ost1
        }

        value1 = value1.split(".").join("")
        value1 = value1.split(",").join("");
        return value1.replace(/\B(?=(\d{3})+(?!\d))/g, ",") + ost;
      }
    } else {
      if(value1) {
        let ost = ",00"
        if(ost1){
          ost = ","+ost1
        }

        value1 = value1.split(".").join("")
        value1 = value1.split(",").join("");
        return value1.replace(/\B(?=(\d{3})+(?!\d))/g, ".") + ost;
      }
    }
    if(value1){
      return value1.slice(0, value1.indexOf(",")).replace(/\B(?=(\d{3})+(?!\d))/g, ".") + value1.slice(value1.indexOf(","));

    }
  }
}
