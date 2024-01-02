//Prueba técnica de ingreso desarrollador
//Juan Steven Sanchez Castro


//------------------1.	Convertir la palabra computador en un arreglo e imprimirlo al reverso lo que se espera ------------------------------

console.log("Punto 1");
const palabraOriginal = "Computador";

// Convertir la palabra en un arreglo de caracteres
const arregloOriginal = palabraOriginal.split('');
const arregloReverso = arregloOriginal.reverse();
console.log("Arreglo al reverso:");
console.log(arregloReverso);



//------2.	Generar una contraseña aleatoria a partir de la siguiente cadena de caracteres "qwertyuiopasdfghjklzxcvbnm0987654321QWERTYUIOPASDFGHJKLZXCVBNM“


console.log(""); 
console.log("Punto 2"); 

const caracteres = "qwertyuiopasdfghjklzxcvbnm0987654321QWERTYUIOPASDFGHJKLZXCVBNM";
const longitudContrasena = 12; // Puedes ajustar la longitud según tus necesidades

function generarContrasena(longitud) {
    let contrasena = '';
    for (let i = 0; i < longitud; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        contrasena += caracteres.charAt(indiceAleatorio);
    }
    return contrasena;
}

const contrasenaAleatoria = generarContrasena(longitudContrasena);

console.log("Contraseña aleatoria generada:");
console.log(contrasenaAleatoria);



//---3.	Del array “arrayPruebas” extraer el producto que más se vendió (no hay productos repetidos).

console.log(""); 
console.log("Punto 3"); 
let arrayPruebas= [
    {"cantidadVendida":2,"NombreProducto":"Té Dharamsala","Proveedor":"Exotic Liquids","Categoria":"Bebidas","PrecioUnidad":"18"},
    {"cantidadVendida":20,"NombreProducto":"Cerveza tibetana Barley","Proveedor":"Exotic Liquids","Categoria":"Bebidas","PrecioUnidad":"19"},
    {"cantidadVendida":12,"NombreProducto":"Sirope de regaliz","Proveedor":"Exotic Liquids","Categoria":"Condimentos","PrecioUnidad":"10"},
    {"cantidadVendida":21,"NombreProducto":"Especias Cajun del chef Anton","Proveedor":"New Orleans Cajun Delights","Categoria":"Condimentos","PrecioUnidad":"22"},
    {"cantidadVendida":2,"NombreProducto":"Mezcla Gumbo del chef Anton","Proveedor":"New Orleans Cajun Delights","Categoria":"Condimentos","PrecioUnidad":"21,35"},
    {"cantidadVendida":32,"NombreProducto":"Mermelada de grosellas de la abuela","Proveedor":"Grandma Kelly's Homestead","Categoria":"Condimentos","PrecioUnidad":"25"},
    {"cantidadVendida":4,"NombreProducto":"Peras secas orgánicas del tío Bob","Proveedor":"Grandma Kelly's Homestead","Categoria":"Frutas/Verduras","PrecioUnidad":"30"},
    {"cantidadVendida":32,"NombreProducto":"Salsa de arándanos Northwoods","Proveedor":"Grandma Kelly's Homestead","Categoria":"Condimentos","PrecioUnidad":"40"},
    {"cantidadVendida":5,"NombreProducto":"Buey Mishi Kobe","Proveedor":"Tokyo Traders","Categoria":"Carnes","PrecioUnidad":"97"},
    {"cantidadVendida":4,"NombreProducto":"Pez espada","Proveedor":"Tokyo Traders","Categoria":"Pescado/Marisco","PrecioUnidad":"31"},{"cantidadVendida":7,"NombreProducto":"Queso Cabrales","Proveedor":"Cooperativa de Quesos 'Las Cabras'","Categoria":"Lácteos","PrecioUnidad":"21"},
    {"cantidadVendida":65,"NombreProducto":"Queso Manchego La Pastora","Proveedor":"Cooperativa de Quesos 'Las Cabras'","Categoria":"Lácteos","PrecioUnidad":"38"},
    {"cantidadVendida":8,"NombreProducto":"Algas Konbu","Proveedor":"Mayumi's","Categoria":"Pescado/Marisco","PrecioUnidad":"6"},
    {"cantidadVendida":6,"NombreProducto":"Cuajada de judías","Proveedor":"Mayumi's","Categoria":"Frutas/Verduras","PrecioUnidad":"23,25"},
    {"cantidadVendida":7,"NombreProducto":"Salsa de soja baja en sodio","Proveedor":"Mayumi's","Categoria":"Condimentos","PrecioUnidad":"15,5"},
    {"cantidadVendida":0,"NombreProducto":"Postre de merengue Pavlova","Proveedor":"Pavlova, Ltd.","Categoria":"Repostería","PrecioUnidad":"17,45"},
    {"cantidadVendida":7,"NombreProducto":"Cordero Alice Springs","Proveedor":"Pavlova, Ltd.","Categoria":"Carnes","PrecioUnidad":"39"},
    {"cantidadVendida":9,"NombreProducto":"Langostinos tigre Carnarvon","Proveedor":"Pavlova, Ltd.","Categoria":"Pescado/Marisco","PrecioUnidad":"62,5"},
    {"cantidadVendida":8,"NombreProducto":"Pastas de té de chocolate","Proveedor":"Specialty Biscuits, Ltd.","Categoria":"Repostería","PrecioUnidad":"9,2"},
    {"cantidadVendida":6,"NombreProducto":"Mermelada de Sir Rodney's","Proveedor":"Specialty Biscuits, Ltd.","Categoria":"Repostería","PrecioUnidad":"81"}

];


function encontrarProductoMasVendido(array) {
    let productoMasVendido = null;
    let cantidadVendidaMaxima = 0;

    for (let i = 0; i < array.length; i++) {
        const productoActual = array[i];
        const cantidadVendidaActual = productoActual.cantidadVendida;

        if (cantidadVendidaActual > cantidadVendidaMaxima) {
            cantidadVendidaMaxima = cantidadVendidaActual;
            productoMasVendido = productoActual;
        }
    }

    return productoMasVendido;
}

const productoMasVendido = encontrarProductoMasVendido(arrayPruebas);

console.log("Producto más vendido:");
console.log(productoMasVendido);



///4.	Ordenar de mayor a menor los proveedores que más productos nos venden.


console.log(""); 
console.log("Punto 4"); 
// Obtener la cantidad total de productos vendidos por cada proveedor
const cantidadVendidaPorProveedor = arrayPruebas.reduce((result, producto) => {
    const proveedor = producto.Proveedor;
    const cantidadVendida = producto.cantidadVendida;

    result[proveedor] = (result[proveedor] || 0) + cantidadVendida;

    return result;
}, {});


// Convertir el objeto en un array de objetos para facilitar la clasificación
const arrayProveedoresOrdenado = Object.entries(cantidadVendidaPorProveedor)
    .map(([proveedor, cantidadVendida]) => ({ proveedor, cantidadVendida }))
    .sort((a, b) => b.cantidadVendida - a.cantidadVendida);

// Imprimir proveedores en orden de mayor a menor cantidad de productos vendidos
console.log("Proveedores ordenados de mayor a menor por cantidad de productos vendidos:");

for (const proveedorInfo of arrayProveedoresOrdenado) {
    console.log(`${proveedorInfo.proveedor}: ${proveedorInfo.cantidadVendida} productos vendidos`);
}


////  5.	Cual fue el producto que más ganancias nos generó (ganancias es cantidadVendida * PrecioUnidad).

console.log(""); 
console.log("Punto 5"); 
// Encontrar el producto que generó más ganancias
const productoMasRentable = arrayPruebas.reduce((productoMasRentable, productoActual) => {
    const gananciasActual = productoActual.cantidadVendida * parseFloat(productoActual.PrecioUnidad.replace(',', '.'));

    if (gananciasActual > (productoMasRentable.ganancias || 0)) {
        return {
            producto: productoActual.NombreProducto,
            ganancias: gananciasActual
        };
    } else {
        return productoMasRentable;
    }
}, {});

console.log("Producto que generó más ganancias:");
console.log(productoMasRentable);


//6.	Cuáles fueron las ganancias por categoría.

console.log(""); 
console.log("Punto 6"); 

const gananciasPorCategoria = arrayPruebas.reduce((result, producto) => {
    const ganancias = parseFloat(producto.PrecioUnidad.replace(',', '.')) * producto.cantidadVendida;
    const categoria = producto.Categoria;

    result[categoria] = (result[categoria] || 0) + ganancias;

    return result;
}, {});

console.log("Ganancias por categoría:");
console.log(gananciasPorCategoria);
