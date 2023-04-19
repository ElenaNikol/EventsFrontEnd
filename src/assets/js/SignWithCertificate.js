var isExtensionInstalled = false;
var isNativeSignerInstalled = false;
var SignExtension;
var checkCertificatesBrojac = 0;
var provereniCertifikati = "";
var splitedCertificates = "";
var hostParam = "";
var certificates = "";
var brojac = 0;
var potpisaniNalozi = "";
var splitedXML = "";
var nsSignMSG = "";
var messageIE = "Нема подршка за потпишување со Internet Explorer. Ве молиме користете Google Chrome, Mozila или Microsoft Edge."

// var isNativeExeInstalled = function (response) {
//     console.log("response: " + response);
//     if(response != undefined){
//     if (response.IsNativeAppInstalled) {
//         isNativeSignerInstalled = true;
//     } else {
//         console.log("Native host is not installed");
//         isNativeSignerInstalled = false;
//     }
//   }else{
//     console.log("Native host is not installed");
//         isNativeSignerInstalled = false;
//   }
//     console.log("isNativeSignerInstalled: " + isNativeSignerInstalled);
// }


var isNativeExeInstalled = function(response) {
  console.log("response: " + response);
 if (response.IsNativeAppInstalled) {
   isNativeSignerInstalled = true;
 } else {
   console.log("Native host is not installed");
   isNativeSignerInstalled = false;
 }
 console.log("isNativeSignerInstalled: " + isNativeSignerInstalled);
}


var checkExtension = function () {
    console.log("checkExtension");

    var isIEe = false || !!document.documentMode;
    if (isIEe) {
        console.log("ie");//poraka IE ne e kompatibilen!
        alert(messageIE);
    }
    else {
        console.log("Other Browsers");
        try {


        SignExtension = XmlSignExtension;
        console.log("SignExtension: ", SignExtension);

        if (!$.isEmptyObject(SignExtension)) {
            SignExtension.Setup({
                languageId: "mk",
                pdfMaxFileSize: 500
            });

            isExtensionInstalled = true;
            SignExtension.IsNativeAppInstalled(isNativeExeInstalled);

        } else {
            console.log("You should install the extension first.");
            isExtensionInstalled = false;
        }
      }catch{
        console.log("You should install the extension first.");
      }
    }
}

var checkAllCertificates = function (certificates, nativeAppURL) {
    console.log("checkAllCertificates");

    splitedCertificates = "";
    provereniCertifikati = "";
    checkCertificatesBrojac = 0;

    certificates = certificates.slice(0, -1);
    splitedCertificates = certificates.split(",");
    console.log("splitedCertificates: ", splitedCertificates);
    console.log("splitedCertificates[checkCertificatesBrojac]: ", splitedCertificates[checkCertificatesBrojac]);
    checkCertificates(splitedCertificates[checkCertificatesBrojac], nativeAppURL);
}

function checkExtensionFn() {
    console.log("checkExtension");

    var isIEe = false || !!document.documentMode;
    if (isIEe) {
        console.log("ie");//poraka IE ne e kompatibilen!
        alert(messageIE);
    }
    else {
      // try{
        console.log("Other Browsers");

        SignExtension = XmlSignExtension;
        console.log("SignExtension: ", SignExtension);

        if (!$.isEmptyObject(SignExtension)) {
            SignExtension.Setup({
                languageId: "mk",
                pdfMaxFileSize: 500
            });

            isExtensionInstalled = true;
console.log("isNativeExeInstalled: ", isNativeExeInstalled)
            SignExtension.IsNativeAppInstalled(isNativeExeInstalled);

        } else {
            console.log("You should install the extension first.");
            isExtensionInstalled = false;
        }
      // }catch{
      //   console.log("You should install the extension first in catch .");
      //       isExtensionInstalled = false;
      // }


  }
}

function potpisiNsSign(provereniCertifikati, nativeAppURL) {
    console.log("vo potpisiNsSign()"); //sanja 03.02.2020
    brojac = 0;
    potpisaniNalozi = "";
    console.log("nativeAppURL: ", nativeAppURL);//sanja 03.02.2020
    nsSignMSG = "";
    var nalog = "";
    //var nalog = "<Nalozi xmlns=''http://tempuri.org/Nalozi.xsd''><NalogDetali><BrojNalog>60001215273942</BrojNalog><TipNalog>pp30</TipNalog><DatumValuta>2019-04-08T00:00:00+01:00</DatumValuta><DatumNalog>2019-04-08T00:00:00+01:00</DatumNalog><BankaTeret>500</BankaTeret><ZiroTeret>1111111111</ZiroTeret><KontrolenBrojTeret>39</KontrolenBrojTeret><NazivTeret>Ime Prezime</NazivTeret>" +
    //    "<AdresaTeret>Adresa</AdresaTeret><ImeBankaTeret>Стопанска Банка А.Д. Битола</ImeBankaTeret><DanocenBroj /><CelDoznaka1>2</CelDoznaka1><CelDoznaka2 /><PovikuvanjeBrojTeret>1111</PovikuvanjeBrojTeret><BankaKorist>500</BankaKorist><ZiroKorist>1111111111</ZiroKorist> <KontrolenBrojKorist>10</KontrolenBrojKorist> <NazivKorist>Ime Prezime</NazivKorist><AdresaKorist>СКОПЈЕ</AdresaKorist>" +
    //    "<ImeBankaKorist>Стопанска Банка АД Битола</ImeBankaKorist><Iznos>6.00</Iznos><PovikuvanjeBrojKorist>1111</PovikuvanjeBrojKorist><SifraPlakanje>930</SifraPlakanje><NacinPlakanje>0</NacinPlakanje><LogiranKlient>user</LogiranKlient><ImeFormaVnesuvanje>frmNalogPP30</ImeFormaVnesuvanje> <UplatnaSmetka /><ZiroBudzetskiKorisnik /><PrihodnaSifra /><Programa />" +
    //    "<Status>V</Status><FolioBroj /><BrojNalozi>0</BrojNalozi><NaloziOdPP53 /><Prioritet>50</Prioritet><VidUplata>S</VidUplata></NalogDetali></Nalozi>";
    ////NALOG???
    splitedXML = nalog.split("*");
    // console.log("Cel splitedXML pred povik na f-ja: ", splitedXML);
    signAllDocumentsNS(splitedXML, provereniCertifikati);
}

function signAllDocumentsNS(splitedXML, provereniCertifikati) {
    //console.log("splitedXML dolzina: ", splitedXML.length);
    //console.log("splitedXML: ", splitedXML[brojac]);
    console.log("signAllDocumentsNS provereniCertifikati1: ", provereniCertifikati);
    if (brojac < splitedXML.length) {
        SignExtension.SignXml({
            xmlForSign: splitedXML[brojac],
            certificateSubject: '',
            certificateIssuer: '',
            certificateThumbprint: provereniCertifikati,
            xmlReferences: '',
            onlyValidCertificate: false
        }, function (data) {
            console.log("Data: ", data); //sanja 03.02.2020
            potpisaniNalozi += data + "*";
            //brojac++;
            //console.log("brojac: ", brojac);
            signAllDocumentsNS(splitedXML[brojac++], provereniCertifikati);
        }, function (data) {
            console.log("XmlSignExtension err" + data);//sanja 03.02.2020
            brojac++;
            signAllDocumentsNS(splitedXML[brojac]);
        });
    }

    if (brojac == splitedXML.length) {
        //todo: nikolovskif
        //console.log("brojac koga treba da zavrsi rekurzijata", brojac);//sanja 03.02
        //console.log("potpisaniNalozi", potpisaniNalozi);
        //return false;
        //callService(encodeURIComponent(potpisaniNalozi));
    }
}

var checkCertificates = function (splitedCertificates, nativeAppURL) {
    console.log("checkCertificates", splitedCertificates);

    if (checkCertificatesBrojac < splitedCertificates.length) {
        var subject = '';
        var issuer = '';
        var onlyValidCertificate = false;
        SignExtension.GetCertificates({
            certificateSubject: subject,
            certificateIssuer: issuer,
            certificateThumbprint: splitedCertificates[checkCertificatesBrojac],
            onlyValidCertificate: false
        }, function (data) {
            console.log("data[0] ", data[0]);
            console.log("data: ", data);
            if (data[0] != undefined) {
                provereniCertifikati += data[0].Thumbprint + "-" + data[0].IsValid + "*";
                console.log("data: " + data); //sanja 03.02.2020
            }
            checkCertificatesBrojac++;
            checkCertificates();
        }, function (data) {
            console.log("error checkCertificates: ", data);
            checkCertificatesBrojac++;
            checkCertificates();
        });
    }

    console.log("checkCertificates checkCertificatesBrojac posle call: ", checkCertificatesBrojac); //sanja 03.02
    console.log("provereniCertifikati: ", provereniCertifikati); //sanja 03.02.2020
    console.log("if ", checkCertificatesBrojac, splitedCertificates.length);

    // * 2 zaradi gresaka so extenzija -> koga se fiksne da se sredi
    if (checkCertificatesBrojac == splitedCertificates.length) {
        console.log("provereniCertifikati - ", provereniCertifikati);
        provereniCertifikati = provereniCertifikati.substring(0, provereniCertifikati.length - 1);

        if (provereniCertifikati.Length > 0) {
            potpisiNsSign(provereniCertifikati);
        }
        else { //sertifikatot ne e pronajden
            console.log("Sertifikat ne e pronajden");
            alert("Сертификат не е пронајден.");
        }
    }
    /*else {
        console.log("Greska sertifikat");
        alert("Грешка со сертификат.");
    }*/
}

function SertificateClick(hostParam, certificates) {  //povik klik na kopce
    //https://testebanking.stbbt.mk/ibebs_service.asmx
    var hostSubstr = hostParam.split('/');
    var nativeAppURL = hostSubstr[0] + "//" + hostSubstr[2] + "/" + "downloads/Nextsense Signing Component.exe";
    console.log(nativeAppURL);

    //setData();
    //console.log(isNativeExeInstalled);

    var isIE = false || !!document.documentMode;
    var linkChrome = '<a href="https://chrome.google.com/webstore/detail/nextsense-xml-signing-com/ccdgonnidaghcdicoebncgncfmpagpdk" target="_blank">Линк до компонентата.</a>';
    var linkFirefox = '<a href="https://signingextension.nextsense.com/MozzilaExtension.aspx?type=xml&install=1" target="_blank">Линк до компонентата.</a>';
    var linkEdge = '<a href="https://www.microsoft.com/store/apps/9P198TVSC154" target="_blank">Линк до компонентата.</a>';
    if (isIE) {
        alert(messageIE);//poraka IE ne e kompatibilen!
    } else {
        console.log("Other browsers");
        checkExtensionFn();

        if (!isExtensionInstalled) {
            console.log("nema ekstenzija");
            alert("Немате инсталирано екстензија за потпишување. Ве молиме инсталирајте ја екстензијата и потоа обидете се да потпишете!<br /> Линк до компонентата за Chrome: " + linkChrome + "<br /> Линк до компонентата за Mozilla: " + linkFirefox + "<br /> Линк до компонентата за Edge: " + linkEdge);
            return false;
        }

        checkAllCertificates(certificates, nativeAppURL);
    }
}

function testT() {
    console.log("test");}
