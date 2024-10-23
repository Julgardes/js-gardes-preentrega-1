//Esta aplicacion facilita el ABM de una lista de articulos faltantes para pedir a un proveedor
//Trabajo en proceso, carga artículos y muestra. 
//Falta modificación de artículos, borrado y envío por whatsapp al proveedor (simulación)


const faltantes = []

//Muestro la lista de articulos a comprar
function mostrarFaltantes(){
    let listaFaltantes = "Los artículos son:"
    let i = 0
    for(item of faltantes){
        i++
        listaFaltantes += "\n" + i +"-" + item  
    }
    alert(listaFaltantes)

} 

//Carga de artículos
function agregarArticulo(){
    let articulo = prompt("Articulo para comprar a proveedor: \n")
    faltantes.push(articulo)
    mostrarFaltantes()
}

//Modifica un artículo de la lista
function cambiarArticulo(){
    let nombreArticulo = faltantes[--codigoArticulo]
    cambiaArticulo = prompt(("Artículo a modificar: " + nombreArticulo + "\n por: "))
    faltantes[codigoArticulo] = cambiaArticulo
    mostrarFaltantes()
}

//Borrado de un artículo de la lista
function eliminarArticulo(){
    let nombreAborrar = faltantes[--borrarArticulo]
    confirma = prompt(("¿Está seguro que desea eliminar el artículo: " + nombreAborrar + "/n s/n"))
    if (confirma == "s"){
            faltantes.splice(borrarArticulo, 1)
            mostrarFaltantes()
    }else{
        alert("El articulo permanecerá en la lista")
        mostrarFaltantes()
    }
}

//Envío de la lista a la direccion del proveedor que carga el usuario (simulación)
function enviarMail(){
    let enviandoArticulo = "Enviando la lista por e-mail ⏳ 📤 " + "(TOTAL: " + faltantes.length + "  artículos)"
    let reloj = 0
    for(item of faltantes){
        reloj++
        enviandoArticulo +=  "\n" + item + " ⏳ " 
    }
    alert(enviandoArticulo)
} 


//Menu de opciones para el usuario
function menu(opcion){
    switch(opcion){
        case 1:
            agregarArticulo()
            break

        case 2:
            codigoArticulo = prompt("Ingrese número de artículo a modificar ")
            cambiarArticulo()            
            break

        case 3:
            borrarArticulo = prompt("Ingrese el número del artículo a borrar")
            eliminarArticulo()
            break

        case 4:
            mailProveedor = prompt("dirección de e-mail para envío de la lista: ")
            enviarMail()
            break

        default:
            alert("ERROR -- Elija una opción del 1 al 4")
    }
}

//aplicación que ejecuta el menú
function app(){
    let loop = true
    alert("EL PUNTERO LOCO \n Comencemos con el armado de la lista de mercaderia faltante")
    while (loop){
        let opcion = parseInt(prompt("LISTA DE ARTICULOS PARA ENVIAR AL PROVEEDOR: \n 1 - Agregar articulo \n 2 - Modificar articulo \n 3 - Eliminar articulo \n 4 - Enviar la lista al Proveedor X"))
        menu(opcion)
        loop = confirm("desea volver al Menú?")
    }
    alert("LISTA FINALIZADA")
}

app()
