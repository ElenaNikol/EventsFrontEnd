import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
const exeltest = "application/vnd.ms-excel;charset=utf-8"

@Injectable({
  providedIn: 'root'
})
export class ExcelService {

constructor() { }

//funkcija koja exportira tabela vo exel parametar se prakja datata koja e dobiena od apito kako json format i stavame ime na fajlot
public exportAsExcelFile(json: any[], excelFileName: string): void {

  const myworksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
  const myworkbook: XLSX.WorkBook = { Sheets: { 'data': myworksheet }, SheetNames: ['data'] };
  const excelBuffer: any = XLSX.write(myworkbook, { bookType: 'xlsx', type: 'array' });
  this.saveAsExcelFile(excelBuffer, excelFileName);
}

private saveAsExcelFile(buffer: any, fileName: string): void {
  const data: Blob = new Blob([buffer], {
    type: EXCEL_TYPE
  });
  FileSaver.saveAs(data, fileName + '_exported'+ EXCEL_EXTENSION);
}


 ExportToExcel(id, excelFileName) {

    let dataType = 'application/csv;charset=UTF-8;';
    let extension = '.xls';

    let base64 = function(s) {
        return window.btoa(unescape(encodeURIComponent(s)))
    };

    let template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"> <meta http-equiv="content-type" content="application/vnd.ms-excel; charset=UTF-8"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>';
    let render = function(template, content) {
        return template.replace(/{(\w+)}/g, function(m, p) { return content[p]; });
    };

    let tableElement = document.getElementById(id);

    let tableExcel = render(template, {
        worksheet: excelFileName,
        table: tableElement.innerHTML
    });

    excelFileName = excelFileName + extension;
    const navigator = (window.navigator as any);

    if (navigator.msSaveOrOpenBlob)
    {
        let blob = new Blob(

            [ '\ufeff', tableExcel ],
            { type: dataType }
        );

        navigator.msSaveOrOpenBlob(blob, excelFileName);
    } else {



        let downloadLink = document.createElement("a");


        document.body.appendChild(downloadLink);

        downloadLink.href = 'data:' + dataType + ';base64,' + base64(tableExcel);

        downloadLink.download = excelFileName;

        downloadLink.click();
    }



 }


}
