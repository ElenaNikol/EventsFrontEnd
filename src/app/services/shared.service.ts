import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  //private subject = new Subject<any[]>();
  private subject: any;
  private subjectMoj = new Subject<boolean>();

  private accountdData: any;

  private filterYears: number;

  private deposit$ = new BehaviorSubject<any>({});
  selectedDeposit$ = this.deposit$.asObservable();

  private credit$ = new BehaviorSubject<any>({});
  selectedCredit$ = this.credit$.asObservable();

  private creditCard$ = new BehaviorSubject<any>({});
  selectedcreditCard$ = this.creditCard$.asObservable();

  private debitCard$ = new BehaviorSubject<any>({});
  selectedDebitCard$ = this.debitCard$.asObservable();

  private transaction$ = new BehaviorSubject<any>({});
  selectedTransaction$ = this.transaction$.asObservable();

  constructor() { }

  addData(data) {
    this.subject = data
  }

  getData() {
    return this.subject;
    // return this.subject.asObservable();
  }

  addHideMain(realodTrue: boolean) {
    this.subjectMoj.next(realodTrue);
  }

  getHideMain() {
    return this.subjectMoj.asObservable();
  }

  addAccountsInfo(data) {
    this.accountdData = data
  }

  getAccountInfo() {
    return this.accountdData
  }

  addFilterYears(filterYears) {
    this.filterYears = filterYears
  }

  getFilterYears() {
    return this.filterYears
  }

  addDataForGraph(deposit) {
    this.deposit$.next(deposit);
  }

  addCreditDataForGraph(credit) {
    this.credit$.next(credit);
  }

  addCreditCardDataForGraph(creditCard) {
   
    console.log('vo servis shared' , creditCard);
    this.creditCard$.next(creditCard);
  }

  addDebitCardDataForGraph(debitCard) {
    console.log('vo servis shared' , debitCard);
    this.debitCard$.next(debitCard);
  }

  addTransactionDataForGraph(transaction) {
    this.transaction$.next(transaction);
  }

  dateDiffInYears(date1, date2) {
    let datenew = new Date(date2)
    let dateold = new Date(date1)

    var ynew = datenew.getFullYear()
    var mnew = datenew.getMonth();
    var dnew = datenew.getDate();
    var yold = dateold.getFullYear();
    var mold = dateold.getMonth();
    var dold = dateold.getDate();
    var diff = ynew - yold;
    if (diff > 2)
      return diff;

    if (mold > mnew) {
      diff--;
    }
    else {
      if (mold == mnew) {
        if (dold > dnew) {
          diff--;
        }
        else if (dold < dnew) {
          diff++;
        }
      } else {
        diff++;
      }
    }
    return diff;
  }
}
