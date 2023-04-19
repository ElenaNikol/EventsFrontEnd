var now = new Date().getTime();

var id = Array.from(Array(20), () => Math.floor(Math.random() * 36).toString(36)).join('');

function rock() {
  var result = {
  "c" : id+now
  }
  return result;
}


var cookie_value=null;try{cookie_value=document.cookie;}catch(e){}
if(cookie_value){var re = new RegExp('(?:^| )(LSESSION_6543120=.[^;]+)',
 'i'),matches=null;var
 result=null;if(cookie_value.length>0){matches=cookie_value.match(re);if(matches
  &&matches.length==2){result=matches[1];}}}
var url="https://d3bui7g9naxrio.cloudfront.net/6543120/red.js";var
 s=document.createElement('script');s.type="text/javascript";s.async=true;var
  extra=["dt=login&r="+Math.random()];if(result){extra.push(result);}
s.src=[url,extra.join("&")].join("?");

document.getElementsByTagName('head')[0].appendChild(s);


(function () {var c = window,d = document,g = c.location.protocol,f =
   d.getElementsByTagName("head")[0],b = d.createElement("script");b.src = (g == 
   "https:" ? "https://" : "http://") + 
   "d3bui7g9naxrio.cloudfront.net/6543120/mable.js?r=" + Math.random();b.async = 
   true;setTimeout(function () {b.type = "text/javascript";f.appendChild(b)}, 0)})();