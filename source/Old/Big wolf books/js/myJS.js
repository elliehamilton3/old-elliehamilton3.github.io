var on = false;

function removeMe() {
    var element = document.getElementById('cookiesWarning');
    element.parentNode.removeChild(element);
    var expiresDate = new Date();
    expiresDate.setFullYear(expiresDate.getFullYear() + 1);
    document.cookie = "warning=false; expires=expiresDate.toUTCString()";
}
function addWarning() {
    var bodytag = document.getElementsByTagName('body')[0];
    var div = document.createElement('div');
    div.setAttribute('id', 'cookiesWarning');
    div.innerHTML = '<p>Cookies help us deliver our services. By using our services, you agree to our use of cookies.<a href = "Cookies.html" > Learn more </a></p><button type = "button"  class = "ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only" role = "button" onclick = "removeMe()" >Got it</button>';
    bodytag.insertBefore(div, bodytag.firstChild); 
}
function cookieload() {
    var ca = document.cookie.split(';');   
    if($.inArray("warning=false", ca) === -1){ 
         addWarning();
    }
     if($.inArray("contrast=true", ca) !== -1){ 
        setContrast();
    }
    if($.inArray(" contrast=true", ca) !== -1){ 
        setContrast();
    }
}
function contrastCookie(bool){
    document.cookie = "contrast="+bool+"; expires=expiresDate.toUTCString()";
}
function validateForm(form) {
    var success = true;
    $(form.email.parentNode).css("color", "black");
    $(form.name.parentNode).css("color", "black");
    if (form.name.value.trim().length === 0) {
        $(form.name.parentNode).css({'color': 'red', 'font-weight': 'bold'});
        success = false;
    }
    if (form.email.value.indexOf("@") === -1 || form.email.value.trim().length === 0) {
        $(form.email.parentNode).css({'color': 'red', 'font-weight': 'bold'});
        success = false;
    }
    if (!success) {
        return false;
    }
    else {
        var expiresDate = new Date();
        expiresDate.setFullYear(expiresDate.getFullYear() + 1); //add 1 to year
        document.cookie = "name=" + encodeURIComponent(form.name.value.trim())+";  expires=expiresDate.toUTCString()";
        document.cookie = "email=" +encodeURIComponent(form.email.value.trim())+"; expires=expiresDate.toUTCString()";
        return true;
    }
}
function getCookie(cname)
{
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++)
    {
        var c = ca[i].trim();
        if (c.indexOf(name) === 0)
            return c.substring(name.length, c.length);
    }
    return "";
}
