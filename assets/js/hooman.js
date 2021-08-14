function setCookie(cname, cvalue, exdays) {
   var d = new Date();
   d.setTime(d.getTime() + (exdays*24*60*60*1000));
   var expires = "expires="+ d.toUTCString();
   document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
 }

function jQexec(mk){
   if(hoom.indexOf(md5(mk)) >= 0) {
      setCookie('mk', mk, 30);
      window.location.href='home.html';
   } else {
      return 0;
   }
}
