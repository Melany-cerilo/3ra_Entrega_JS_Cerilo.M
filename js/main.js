/* Este es un simulador donde podras elegir los tomos del manga Demon Slayer.
El usuario podrá ingresar los tomos que desee en orden aleatorio, cada vez
que el usuario ingrese su tomo y acepte le preguntara si desea otro tomo,
si el usuario acepta podrá elegir el siguiente tomo que desee. De lo contrario
apretará cancelar para dejar de elegir y continuar con su compra. 
Luego se mostrara por pantalla:
-los tomos ordenados por numeros de tomo del menor al mayor.
-los titulos de los tomos segun el numero al cual corresponda.
-el precio de cada valor de tomo ( -del 1 al 9 $1500 / -del 10 al 15 $2000 / -del 16 al 23 $2500)
-muestra el total con el descuento realizado por llevarse cierta cantidad(  un 10% de descuento al comprar más de 5 tomos, un 20% al adquirir más de 10 y un increíble descuento del 40% si completas la colección con más de 15 tomos. )                             

*/
function ejecutarCompra() {
  let compra = new CompraTomos();
  compra.iniciarCompra();
}

ejecutarCompra();
