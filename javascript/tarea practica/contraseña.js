let intentos = 0;
let contraseña;

do {
    contraseña = prompt("Ingresa la contraseña:");
    intentos++;

    if (contraseña == "admin123") {
        alert("Acceso concedido.");
        break;
    }

} while (intentos < 4);

if (intentos == 4 && contraseña != "admin123") {
    alert("Cuenta bloqueada.");
}