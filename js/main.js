var contraseña = "contraseña1", contador = 0, input = "";

while (contador < 3&&input!=contraseña) {
    input = prompt("Introduce la contraseña");
    contador++;
}
if (input==contraseña) {
    console.log("Contraseña correcta");
}else{
    console.log("Contraseña incorrecta");
}