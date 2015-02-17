function onDeviceReady(){
    alert("hahahahah");
    $("#login-form").fadeOut(1000);
}

$(document).ready(function(){
    document.addEventListener("deviceready", onDeviceReady, true);
    
});

