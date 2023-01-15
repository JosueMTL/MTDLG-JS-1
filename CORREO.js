let username = prompt("INGRESE SU USUARIO")
const USER_NAME = "ADMIN"
let pasword = prompt("INGRESU SU PASWORD")
const PASSWORD_FLAY = "secret"

if (username == USER_NAME && pasword == PASSWORD_FLAY) {
    console.log("BIENVENIDO");
}

else {
    console.log("ALGO ESTA MAL REVISA TU USUARIO O PASSWORD");
}
