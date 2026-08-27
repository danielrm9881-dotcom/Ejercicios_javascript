let arreglo = ["admin", "clave1234", "pass", "supersegura123"];

for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i].length >= 8)
        console.log("Contraseña " + (i + 1) + " válida");
    else
        console.log("Contraseña " + (i + 1) + " no válida");
}
