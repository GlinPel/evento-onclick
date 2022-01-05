let login = true;
function deletebutton(element) {
    element.remove();
}

function loginlogout(element) {
    login = !login;
    if(login){
        element.innerHTML = 'login';
    }else{
        element.innerHTML = 'logout';
    }
}