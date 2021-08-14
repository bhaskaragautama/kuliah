function setCookie(cname, cvalue, exdays) {
   var d = new Date();
   d.setTime(d.getTime() + (exdays*24*60*60*1000));
   var expires = "expires="+ d.toUTCString();
   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
 }

function jQexec(cl){
   if(hoom.indexOf(md5(cl)) >= 0) {
      setCookie('cl', cl, 30);
      window.location.href='home.html';
   } else {
      return 0;
   }
}
