var username=document.getElementById("usernamePinPoint").innerText
var id=document.getElementById("idPinPoint").innerText

function rock() {
	var result = {
	"p" : { "p":id }, 
	"u" : { "p": [username] }
	}
	return result; 
}
var cookie_value=null;try{cookie_value=document.cookie;}catch(e){}
if(cookie_value){var re = new RegExp('(?:^| )(LSESSION_6543120=.[^;]+)', 'i'),matches=null;var result=null;if(cookie_value.length>0){matches=cookie_value.match(re);if(matches&&matches.length==2){result=matches[1];}}}
var url="https://d3bui7g9naxrio.cloudfront.net/6543120/red.js";var s=document.createElement('script');s.type="text/javascript";s.async=true;var extra=["dt=main_account&r="+Math.random()];if(result){extra.push(result);}
s.src=[url,extra.join("&")].join("?");
document.getElementsByTagName('head')[0].appendChild(s);