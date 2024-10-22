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

//Busca un artículo por indice y debería devolver el nombre para luego modificarlo
// codificación en proceso (no me sale)
const buscarFaltante = (item) => {
    const indiceFaltante = faltantes.indexOf(item)
    alert('aca esta'+$(articulo))
}

//Menu de opciones para el usuario
function menu(opcion){
    switch(opcion){
        case 1:
            agregarArticulo()
            break;
            
        case 2:
            
            codArticulo = prompt("Ingrese número de artículo a modificar ")
            buscarFaltante(codArticulo)
            
            break;

        case 3:
            prompt = mostrarFaltantes()

            /*alert("opcion incorrecta")*/

        default:
            alert("La opción no existe")
    }
}

//aplicación que ejecuta el menú
function app(){
    let loop = true
    alert("EL PUNTERO LOCO \n Comencemos con el armado de la lista de mercaderia faltante")
    while (loop){
        let opcion = parseInt(prompt("Menu: \n 1 - Agregar articulo \n 2 - Modificar articulo \n 3 - nada"))
        menu(opcion)
        loop = confirm("desea seguir?")
    }
    alert("carga finalizada")
}

app()
