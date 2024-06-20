$(document).ready(function(){
})

function changeType() {
    var a = document.getElementById('password');
    if (a.type == 'password') {
        a.type = 'text';
    }
    else{
        a.type = 'password';
    }
}

function signIn() {
    $("#login").addClass("dBlock");
}