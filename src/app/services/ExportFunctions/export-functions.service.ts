import { Injectable } from '@angular/core';
import { file } from 'jszip';

declare var require: any;

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
const htmlToPdfmake = require("html-to-pdfmake");
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Injectable({
  providedIn: 'root'
})
export class ExportFunctionsService {
  infoFlag: any
  constructor() { }


  //funkicija koja ja zema html tabelata i ja podgotvuva za printanje id se zema id na tabelata
  printData(id) {

    var divToPrint = document.getElementById(id);
    let newWin = window.open("");
    newWin.document.write(divToPrint.outerHTML);
    newWin.print();
    newWin.close();
  }



  //funkcija koja ja zema html tabelata i otvara tagovi iterira niz redicite od tabelata  za da se prikazuva kako xml fajl, id se zema id na tabelata i stavame ime na fajl
  exportTableToXML(id, fileName, nameForTable?) {
    if (fileName == "transactionsHomePageXMLExport") {
      var xml = '<?xml version="1.0" encoding="UTF-8"?><Root><TransactionAccounts>';
      var tritem = document.getElementById(id).getElementsByTagName("tr");

      for (let i = 0; i < tritem.length - 1; i++) {
        var celldata = tritem[i];
        if (celldata.cells.length > 0) {
          xml += "<TransactionAccount>\n";
          for (var m = 0; m < celldata.cells.length; ++m) {
            // xml += "\t<data>" + celldata.cells[m].textContent + "</data>\n";
            if (m == 0) {
              xml += "\t<name>" + celldata.cells[m].textContent + "</name>\n";
            } else if (m == 1) {
              xml += "\t<party>" + celldata.cells[m].textContent + "</party>\n";
            } else if (m == 2) {
              xml += "\t<available_balance>" + celldata.cells[m].textContent + "</available_balance>\n";
            } else if (m == 3) {
              xml += "\t<balance>" + celldata.cells[m].textContent + "</balance>\n";
            }
          }
          xml += "</TransactionAccount>\n";
        }
      }

      xml += '</TransactionAccounts></Root>';
      fileName = nameForTable;
    }
    else if (fileName == "homeDeposit") {
      var xml = '<?xml version="1.0" encoding="UTF-8"?><Root><DepositAccountsHomePageForm>';
      var tritem = document.getElementById(id).getElementsByTagName("tr");

      for (let i = 0; i < tritem.length - 1; i++) {
        var celldata = tritem[i];
        if (celldata.cells.length > 0) {
          xml += "<DepositAccountsData>\n";
          for (var m = 0; m < celldata.cells.length; ++m) {
            if (m == 0) {
              xml += "\t<depositType>" + celldata.cells[m].textContent + "</depositType>\n";
            } else if (m == 1) {
              xml += "\t<party>" + celldata.cells[m].textContent + "</party>\n";
            } else if (m == 2) {
              xml += "\t<currencyCode>" + celldata.cells[m].textContent + "</currencyCode>\n";
            } else if (m == 3) {
              xml += "\t<balance>" + celldata.cells[m].textContent + "</balance>\n";
            }
          }
          xml += "</DepositAccountsData>\n";
        }
      }

      xml += '</DepositAccountsHomePageForm></Root>';
      fileName = nameForTable;
    } else if (fileName == "CreditTableXml") {

      var xml = '<?xml version="1.0" encoding="UTF-8"?><Root><CreditForm>';
      var tritem = document.getElementById(id).getElementsByTagName("tr");

      for (let i = 0; i < tritem.length; i++) {
        var celldata = tritem[i];
        if (celldata.cells.length > 0) {
          xml += "<Credit>\n";
          for (var m = 0; m < celldata.cells.length; ++m) {
            xml += "\t<data>" + celldata.cells[m].textContent + "</data>\n";
          }
          xml += "</Credit>\n";
        }
      }
      xml += '</CreditForm></Root>';
      fileName = nameForTable;
    } else if (fileName == "CreditCardTableXml") {

      var xml = '<?xml version="1.0" encoding="UTF-8"?><Root><CreditCardForm>';
      var tritem = document.getElementById(id).getElementsByTagName("tr");

      for (let i = 0; i < tritem.length; i++) {
        var celldata = tritem[i];
        if (celldata.cells.length > 0) {
          xml += "<CreditCard>\n";
          for (var m = 0; m < celldata.cells.length; ++m) {
            xml += "\t<data>" + celldata.cells[m].textContent + "</data>\n";
          }
          xml += "</CreditCard>\n";
        }
      }
      xml += '</CreditCardForm></Root>';
    }
    else if (fileName == "DepositsTableXml") {

      var xml = '<?xml version="1.0" encoding="UTF-8"?><Root><CustomerCard>';
      var tritem = document.getElementById(id).getElementsByTagName("tr");

      for (let i = 0; i < tritem.length; i++) {
        var celldata = tritem[i];
        if (celldata.cells.length > 0) {
          xml += "<Data>\n";
          for (var m = 0; m < celldata.cells.length; ++m) {
            xml += "\t<data>" + celldata.cells[m].textContent + "</data>\n";
          }
          xml += "</Data>\n";
        }
      }
      xml += '</CustomerCard></Root>';
      fileName = nameForTable;
    } else if (fileName == "DepositsBalanceTableXml") {

      var xml = '<?xml version="1.0" encoding="UTF-8"?><Root><StateOfThePrincipal>';
      var tritem = document.getElementById(id).getElementsByTagName("tr");

      for (let i = 0; i < tritem.length; i++) {
        var celldata = tritem[i];
        if (celldata.cells.length > 0) {
          xml += "<Data>\n";
          for (var m = 0; m < celldata.cells.length; ++m) {
            xml += "\t<data>" + celldata.cells[m].textContent + "</data>\n";
          }
          xml += "</Data>\n";
        }
      }
      xml += '</StateOfThePrincipal></Root>';
      fileName = nameForTable;
    } else if (fileName == "Reports") {

      var xml = '<?xml version="1.0" encoding="UTF-8"?><Root><Reports>';
      var tritem = document.getElementById(id).getElementsByTagName("tr");

      for (let i = 0; i < tritem.length; i++) {
        var celldata = tritem[i];
        if (celldata.cells.length > 0) {
          xml += "<Data>\n";
          for (var m = 0; m < celldata.cells.length; ++m) {
            xml += "\t<data>" + celldata.cells[m].textContent + "</data>\n";
          }
          xml += "</Data>\n";
        }
      }
      xml += '</Reports></Root>';
      fileName = nameForTable;
    } else if (fileName == "ForeignTransactionsDayReportXML") {
      var xml = '<?xml version="1.0" encoding="UTF-8"?><Root><Reports>';
      var tritem = document.getElementById(id).getElementsByTagName("tr");

      for (let i = 0; i < tritem.length; i++) {
        var celldata = tritem[i];
        if (celldata.cells.length > 0) {
          xml += "<ForeignTransactionsDayReport>\n";
          for (var m = 0; m < celldata.cells.length; m++) {
            if (m == 0) {
              xml += "\t<RowNo>" + celldata.cells[m].textContent + "</RowNo>\n";
            } else if (m == 1) {
              xml += "\t<TransactionDate>" + celldata.cells[m].textContent + "</TransactionDate>\n";
            } else if (m == 2) {
              xml += "\t<ValueDate>" + celldata.cells[m].textContent + "</ValueDate>\n";
            } else if (m == 3) {
              xml += "\t<Description>" + celldata.cells[m].textContent + "</Description>\n";
            } else if (m == 4) {
              xml += "\t<Currency>" + celldata.cells[m].textContent + "</Currency>\n";
            } else if (m == 5) {
              xml += "\t<CurrencyDebt>" + celldata.cells[m].textContent + "</CurrencyDebt>\n";
            } else if (m == 6) {
              xml += "\t<CurrencyCredit>" + celldata.cells[m].textContent + "</CurrencyCredit>\n";
            } else if (m == 7) {
              xml += "\t<CurrencyState>" + celldata.cells[m].textContent + "</CurrencyState>\n";
            } else if (m == 8) {
              xml += "\t<DenarDebt>" + celldata.cells[m].textContent + "</DenarDebt>\n";
            } else if (m == 9) {
              xml += "\t<DenarCredit>" + celldata.cells[m].textContent + "</DenarCredit>\n";
            } else if (m == 10) {
              xml += "\t<DenarState>" + celldata.cells[m].textContent + "</DenarState>\n";
            }
          }
          xml += "</ForeignTransactionsDayReport>\n";
        }
      }
      xml += '</Reports></Root>';
      fileName = nameForTable;
    } else if (fileName == "transactions") {
      var xml = '<?xml version="1.0" encoding="UTF-8"?><Root><Comitent_Card>';
      var tritem = document.getElementById(id).getElementsByTagName("tr");

      for (let i = 0; i < 3; i++) {
        var celldata = tritem[i];
        if (celldata.cells.length > 0) {
          xml += "<Card_Info>\n";
          for (var m = 0; m < celldata.cells.length; ++m) {
            xml += "\t<info>" + celldata.cells[m].textContent + "</info>\n";

          }
          xml += "</Card_Info>\n";
        }
      }

      for (let i = 4; i < tritem.length; i++) {
        var celldata = tritem[i];
        if (celldata.cells.length > 0) {
          xml += "<Transactions>\n";
          // za slednive elementi zemi gi soodvetnite iminja


          if (i + 1 != tritem.length) {
            for (var m = 0; m < celldata.cells.length; ++m) {
              if (m == 0) {
                xml += "\t<DateOfRealization>" + celldata.cells[m].textContent + "</DateOfRealization>\n";
              } else if (m == 1) {
                xml += "\t<Account>" + celldata.cells[m].textContent + "</Account>\n";
              } else if (m == 2) {
                xml += "\t<NameAndPlace>" + celldata.cells[m].textContent + "</NameAndPlace>\n";
              } else if (m == 3) {
                xml += "\t<Code>" + celldata.cells[m].textContent + "</Code>\n";
              } else if (m == 4) {
                xml += "\t<PurposeOfPayment>" + celldata.cells[m].textContent + "</PurposeOfPayment>\n";
              } else if (m == 5) {
                xml += "\t<Description>" + celldata.cells[m].textContent + "</Description>\n";
              }
              else if (m == 6) {
                xml += "\t<Borrowing_Approval>" + celldata.cells[m].textContent + "</Borrowing_Approval>\n";
              } else if (m == 7) {
                xml += "\t<Transaction_details>" + celldata.cells[m].textContent + "</Transaction_details>\n";
              } else if (m == 8) {
                xml += "\t<Outflow>" + celldata.cells[m].textContent + "</Outflow>\n";
              } else if (m == 9) {
                xml += "\t<Inflow>" + celldata.cells[m].textContent + "</Inflow>\n";
              } else if (m == 10) {
                xml += "\t<Balance>" + celldata.cells[m].textContent + "</Balance>\n";
              }
            }
            //za na posledniot element da se stavi totalinflo totaloutflow i total balance
          } else if (i + 1 == tritem.length) {
            for (var m = 0; m < celldata.cells.length; ++m) {
              if (m == 0) {
                xml += "\t<DateOfRealization>" + celldata.cells[m].textContent + "</DateOfRealization>\n";
              } else if (m == 1) {
                xml += "\t<Account>" + celldata.cells[m].textContent + "</Account>\n";
              } else if (m == 2) {
                xml += "\t<NameAndPlace>" + celldata.cells[m].textContent + "</NameAndPlace>\n";
              } else if (m == 3) {
                xml += "\t<Code>" + celldata.cells[m].textContent + "</Code>\n";
              } else if (m == 4) {
                xml += "\t<PurposeOfPayment>" + celldata.cells[m].textContent + "</PurposeOfPayment>\n";
              } else if (m == 5) {
                xml += "\t<Description>" + celldata.cells[m].textContent + "</Description>\n";
              }
              else if (m == 6) {
                xml += "\t<Borrowing_Approval>" + celldata.cells[m].textContent + "</Borrowing_Approval>\n";
              } else if (m == 7) {
                xml += "\t<Transaction_details>" + celldata.cells[m].textContent + "</Transaction_details>\n";
              } else if (m == 8) {
                xml += "\t<TotalOutflow>" + celldata.cells[m].textContent + "</TotalOutflow>\n";
              } else if (m == 9) {
                xml += "\t<TotalInflow>" + celldata.cells[m].textContent + "</TotalInflow>\n";
              } else if (m == 10) {
                xml += "\t<TotalBalance>" + celldata.cells[m].textContent + "</TotalBalance>\n";
              }
            }
          }

          xml += "</Transactions>\n";
        }
      }
      xml += '</Comitent_Card></Root>';
      fileName = nameForTable;
    } else if (fileName == "transactionsDayReports") {
      var xml = '<?xml version="1.0" encoding="UTF-8"?><Root><Report_day_transaction>';
      var tritem = document.getElementById(id).getElementsByTagName("tr");
      var reportNumber = document.getElementById("numberReport")
      var nameofComitent = document.getElementById('nameOfcomitent')
      var dateOfreport = document.getElementById('dateOfreport')
      var account = document.getElementById('principalAccount')
      //polnime fiksni podatoci zemeni za komitentot
      xml += "<Report_info>\n"
      xml += `<date>` + dateOfreport.textContent + `</date>\n`
      xml += `<number_of_report>` + reportNumber.textContent + `</number_of_report>\n`
      xml += `<principal_account>` + account.textContent + `</principal_account>\n`
      xml += `<principal_name>` + nameofComitent.textContent + `</principal_name>\n`
      //polnime podatocite od 3 red
      for (let i = 2; i < 3; i++) {
        var celldata = tritem[i];
        if (celldata.cells.length > 0) {

          for (var m = 0; m < celldata.cells.length; ++m) {
            if (m == 0) {
              xml += "\t<old_state>" + celldata.cells[m].textContent + "</old_state>\n";
            } else if (m == 1) {
              xml += "\t<owes>" + celldata.cells[m].textContent + "</owes>\n";

            } else if (m == 2) {
              xml += "\t<demands>" + celldata.cells[m].textContent + "</demands>\n";
            } else if (m == 3) {
              xml += "\t<new_state>" + celldata.cells[m].textContent + "</new_state>\n";
            } else if (m == 4) {
              xml += "\t<number_of_borrowing>" + celldata.cells[m].textContent + "</number_of_borrowing>\n";

            } else if (m == 5) {
              xml += "\t<number_of_approval>" + celldata.cells[m].textContent + "</number_of_approval>\n";
            }


          }
          xml += "</Report_info>\n"
        }
      }

      for (let i = 4; i < tritem.length; i++) {
        var celldata = tritem[i];
        if (celldata.cells.length > 0) {
          //ova go stavame da ne ja zeme poslednata skriena tabela
          if (i + 1 != tritem.length) {
            xml += "<Transactions>\n";
            // za slednive elementi zemi gi soodvetnite iminja

            for (var m = 0; m < celldata.cells.length; ++m) {
              if (m == 1) {
                xml += "\t<recipientName_and_account>" + celldata.cells[m].textContent + "</recipientName_and_account>\n";
              } else if (m == 2) {
                xml += "\t<recipient_bankName>" + celldata.cells[m].textContent + "</recipient_bankName>\n";
              } else if (m == 3) {
                xml += "\t<borrowing>" + celldata.cells[m].textContent + "</borrowing>\n";
              } else if (m == 4) {
                xml += "\t<approval>" + celldata.cells[m].textContent + "</approval>\n";
              } else if (m == 5) {
                xml += "\t<code>" + celldata.cells[m].textContent + "</code>\n";
              }
              else if (m == 6) {
                xml += "\t<PurposeOfPayment>" + celldata.cells[m].textContent + "</PurposeOfPayment>\n";
              } else if (m == 7) {
                xml += "\t<reference_number>" + celldata.cells[m].textContent + "</reference_number>\n";
              } else if (m == 8) {
                xml += "\t<ComplaintData>" + celldata.cells[m].textContent + "</ComplaintData>\n";
              }

            }
            xml += "</Transactions>\n";
            //za na posledniot element da se stavi totalinflo totaloutflow i total balance
          }


        }
      }
      xml += '</Report_day_transaction></Root>';
      fileName = nameForTable;
    } else if (fileName = 'exportCredits') {
      var xml = '<?xml version="1.0" encoding="UTF-8"?><Root><Credits>';
      var tritem = document.getElementById(id).getElementsByTagName("tr");

      for (let i = 0; i < tritem.length; i++) {
        var celldata = tritem[i];
        if (celldata.cells.length > 0) {
          xml += "<Credit>\n";
          for (var m = 0; m < celldata.cells.length; m++) {
            if (m == 0) {
              xml += "\t<credit_type>" + celldata.cells[m].textContent + "</credit_type>\n";
            } else if (m == 1) {
              xml += "\t<principal_account>" + celldata.cells[m].textContent + "</principal_account>\n";
            } else if (m == 2) {
              xml += "\t<interest_rate>" + celldata.cells[m].textContent + "</interest_rate>\n";
            } else if (m == 3) {
              xml += "\t<state>" + celldata.cells[m].textContent + "</state>\n";
            } else if (m == 4) {
              xml += "\t<unused_part>" + celldata.cells[m].textContent + "</unused_part>\n";
            }
            else if (m == 5) {
              xml += "\t<total_liabilities>" + celldata.cells[m].textContent + "</total_liabilities>\n";
            }

          }
          xml += "</Credit >\n";
        }
      }
      xml += '</Credits></Root>';



      var pseudoelement = document.createElement("a");

      var filename = fileName + ".xml";
      var pseudoelement = document.createElement("a");
      var blob = new Blob([xml], { type: "text/plain" });

      pseudoelement.setAttribute("href", window.URL.createObjectURL(blob));
      pseudoelement.setAttribute("download", filename);

      pseudoelement.dataset.downloadurl = ["text/plain", pseudoelement.download, pseudoelement.href].join(":");
      pseudoelement.draggable = true;
      pseudoelement.classList.add("dragout");

      pseudoelement.click();

    } else {
      var xml = '<?xml version="1.0" encoding="UTF-8"?><Root><OrderDenars>';
      var tritem = document.getElementById(id).getElementsByTagName("tr");

      for (let i = 0; i < tritem.length; i++) {
        var celldata = tritem[i];
        if (celldata.cells.length > 0) {
          xml += "<Orders name='row" + celldata.cells[0].textContent + "'>\n";
          for (var m = 1; m < celldata.cells.length; ++m) {
            xml += "\t<data>" + celldata.cells[m].textContent + "</data>\n";
          }
          xml += "</Orders >\n";
        }
      }
      xml += '</OrderDenars></Root>';
    }


    var pseudoelement = document.createElement("a");

    var filename = fileName + ".xml";
    var pseudoelement = document.createElement("a");
    var blob = new Blob([xml], { type: "text/plain" });

    pseudoelement.setAttribute("href", window.URL.createObjectURL(blob));
    pseudoelement.setAttribute("download", filename);

    pseudoelement.dataset.downloadurl = ["text/plain", pseudoelement.download, pseudoelement.href].join(":");
    pseudoelement.draggable = true;
    pseudoelement.classList.add("dragout");

    pseudoelement.click();

  }
  //Antonio
  //funkcija koja ja zema html tabelata i ja eksportira vo word no dodava css da e svrti stranata vo horizontalna polozba id se zema id na tabelata i stavame ime na fajl
  exportTableToWord(id, filename, cameFrom?) {
    //// ova e so poglem page size treba nekoj came from da znae od kaj doagja ova
    if (cameFrom == "transactions") {
      var css = (
        '<style type="text/css">' +
        "@page WordSection1 {size:1024.7pt 595.45pt;mso-page-orientation:landscape;margin:1.25in 1.0in 1.25in 1.0in;mso-header-margin:.5in;mso-footer-margin:.5in;mso-paper-source:0;}" +
        "div.WordSection1 {page:WordSection1;}" +
        "#balanceId{display:none !mportant;}" +
        "#exportTable{ border:1px solid #000 !important;border-width: 1px 1px 1px 1px !important;}" +
        "#tableXml2{ border:1px solid #000 !important;border-width: 1px 1px 1px 1px !important;}" +
        "#tableXml{ border:1px solid #000 !important;border-width: 1px 1px 1px 1px !important;}" +
        ".alignTh{text-align: right !important;}" +
        ".flexComitent{text-align: right  !important}" +
        ".testWord{display:block !important; width:88%;}" +

        '</style>'
      );
    } else if (cameFrom == "transactionsHomePage") {
      var css = (
        '<style type="text/css">' +
        "@page WordSection1 {size:1024.7pt 595.45pt;mso-page-orientation:portrait;margin:1.25in 1.0in 1.25in 1.0in;mso-header-margin:.5in;mso-footer-margin:.5in;mso-paper-source:0;}" +
        "div.WordSection1 {page:WordSection1;}" +
        "#balanceId{display:none !mportant;}" +
        "table {width : 100%}" +
        "#exportTable{ border:1px solid #000 !important;border-width: 1px 1px 1px 1px !important;}" +
        "#tableXml2{ border:1px solid #000 !important;border-width: 1px 1px 1px 1px !important;}" +
        "#tableXml{ border:1px solid #000 !important;border-width: 1px 1px 1px 1px !important;}" +
        ".alignTh{text-align: right !important;}" +
        ".flexComitent{text-align: right  !important}" +
        ".testWord{display:block !important; width:88%;}" +
        '</style>'
      );
    } else if (cameFrom == "transactionDayReport") {
      var css = (
        '<style type="text/css">' +
        "@page WordSection1 {size:1024.7pt 595.45pt;mso-page-orientation:landscape;margin:1.25in 1.0in 1.25in 1.0in;mso-header-margin:.5in;mso-footer-margin:.5in;mso-paper-source:0;}" +
        "div.WordSection1 {page:WordSection1;}" +
        "table { border: 2px solid black !important}" +
        "td { border: thin solid black !important}" +
        "th { border: thin solid black !important}" +
        ".alignTh{text-align: right !important;}" +
        ".flexComitent{text-align: right  !important}" +
        ".whiteRow > th{color: black !important;}" +
        ".colorForPrint{color: black !important;}" +
        ".flexTable{display: flex;justify-content: flex-start;}" +
        ".flexData{ display: flex;!important}" +
        "#stateOFDayreport{width:100vh !important;}" +
        '</style>'
      );
    }
    else if (cameFrom == "homeDeposit") {
      var css = (
        '<style type="text/css">' +
        "@page WordSection1 {size:1024.7pt 595.45pt;mso-page-orientation:landscape;margin:1.25in 1.0in 1.25in 1.0in;mso-header-margin:.5in;mso-footer-margin:.5in;mso-paper-source:0;}" +
        "div.WordSection1 {page:WordSection1;}" +
        "table { border: 2px solid black !important, width: 100%}" +
        "th { border: thin solid black !important}" +
        ".alignTh{text-align: right !important;}" +
        ".flexComitent{text-align: right  !important}" +
        ".whiteRow > th{color: black !important;}" +
        ".colorForPrint{color: black !important;}" +
        ".flexTable{display: flex;justify-content: flex-start;}" +
        ".flexData{ display: flex;!important}" +
        "#depHome{width:100vh !important;}" +
        '</style>'
      );
    }
    else if (cameFrom == "trasactionsReserved") {
      var css = (
        '<style type="text/css">' +
        "@page WordSection1 {size:1024.7pt 595.45pt;mso-page-orientation:landscape;margin:1.25in 1.0in 1.25in 1.0in;mso-header-margin:.5in;mso-footer-margin:.5in;mso-paper-source:0;}" +
        "div.WordSection1 {page:WordSection1;}" +
        "#exportTable{ border:1px solid #000 !important;border-width: 1px 1px 1px 1px !important;}" +
        "#tableXml2{ border:1px solid #000 !important;border-width: 1px 1px 1px 1px !important;}" +
        "#tableXml{ border:1px solid #000 !important;border-width: 1px 1px 1px 1px !important;}" +
        ".colorForPrint{color: black !important;}" +
        ".alignTh{text-align: right !important;}" +
        ".whiteRow > th{color: black !important;}" +
        ".flexComitent{text-align: right  !important}" +
        "#exportReservationsTable{display:block !important; width:100%;}" +
        '</style>'
      );
    } else if (cameFrom == "creditsReport") {
      var css = (
        '<style type="text/css">' +
        "@page WordSection1 {size:1024.7pt 595.45pt;mso-page-orientation:landscape;margin:1.25in 1.0in 1.25in 1.0in;mso-header-margin:.5in;mso-footer-margin:.5in;mso-paper-source:0;}" +
        "div.WordSection1 {page:WordSection1;}" +
        ".colorForPrint{color: black !important;}" +
        ".alignTh{text-align: right !important;}" +
        ".whiteRow > th{color: black !important;}" +
        ".flexComitent{text-align: right  !important}" +
        "#exportForExcelAndXml{display:block !important; width:100%;}" +
        '</style>'
      );
    }

    else {

      var css = (
        '<style type="text/css">' +
        "@page WordSection1 {size:841.7pt 595.45pt;mso-page-orientation:landscape;margin:1.25in 1.0in 1.25in 1.0in;mso-header-margin:.5in;mso-footer-margin:.5in;mso-paper-source:0;}" +
        "div.WordSection1 {page:WordSection1;}" +
        "#exportTable{ border:1px solid #000 !important;border-width: 1px 1px 1px 1px !important;}" +
        "#tableXml2{ border:1px solid #000 !important;border-width: 1px 1px 1px 1px !important;}" +
        "#tableXml{ border:1px solid #000 !important;border-width: 1px 1px 1px 1px !important;}" +
        ".alignTh{text-align: right !important;}" +
        ".flexComitent{text-align: right  !important}" +
        ".testWord{display:block !important; width:88%;}" +
        '</style>'
      );
    }

    var preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title>" + css
      + "</head><body>";
    var postHtml = "</body></html>";


    var html = preHtml + document.getElementById(id).innerHTML + postHtml;


    var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html)

    filename = filename ? filename + '.doc' : 'document.doc';

    var downloadLink = document.createElement("a");

    document.body.appendChild(downloadLink);

    downloadLink.href = url;
    downloadLink.download = filename;
    downloadLink.click();


    document.body.removeChild(downloadLink);



  }
}
