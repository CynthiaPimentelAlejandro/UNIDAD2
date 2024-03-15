fetch('menu.json')
//Que hace? Esta linea incia la carga del archivo menu.json. fetch es una funcion de Javascript que facillita la realizacion de solictudes de red, como obtener datos de un archivo o un endpoint de API.
//Como funciona? fetch devuelve una promesa que, cuando se resuelve, tendra acceso a la respuesta de datos en formato JSON, si no un objeto de respuesta que incluye varios detalles sobre la respuesta misma.
.then(response=> response.json())
//Que hace? Esta linea toma el objeto de respuesta obtenido del fetch y utiliza el metodo .json() para convertir el cuerpo de la respuesta en un objeto JavaScript (esto asume que el cuerpo de la respuesta esta en formato JSON).
//Como funciona? el metodo .json() tambien devuelve una promesa, la cual se resuelve con el contenido del cuerpo en formato JSON.
then(data=>{
    const menuContainer = document.getElementById
    ('menu-container');
    //Que hace? Aqui se procesan los datos JSON ya convertidos. Se obtiene una referencia a contenedor del menu en el HTML mediante getElementById ('menu-container') y luego se itera sobre los elementos (categorias) del menu.
    DataTransfer.items.forEach (category => {
        const categoryTitle = document.createElement('h2')
        //Que hace? Aqui se crea un elemento h2, se asigna el nombre de la categoria como su contenido de texto, y luego se añade este titulo al contenedor del menu/.
        categoryTitle.textContent = category.category;
        menuContainer.appendChild (categoryTitle);
        const table= document.createElement ('table');
        //Que hace? se crea un elemento table para cada categoria. Ademas, se prepara el encabezado (tablehead) con las columnas pertinentes. tablebody se inicializa vacio y se llenara con los elementos de la categoria 
        const tableHead = <tr><th>Foto</th><th>Descripcion</th><th>Precio</th></tr>;
        let tableBody = '';
        //Como funciona? Para cada categoria en los datos, se realizan varios pasos; Crear un titulo para la categoria (se crea un elemento <h2> para el titulo de la categoria, se establece su contenido de texto al nombre de la categoria (category-category), luego se agrega al contenedor del menu).
        //Crear una tabla para los elementos de esas categorias: se genera una tabla por cada categoria (primero se define el encabezado de la tabla <tr><th>Foto</th><th>Descripcion</th><th>Precio</th></tr>;)
        category.items.forEach. item =>{
            tableBody += <tr>
                <td>img src= "${item.image} alt= ${item.name} </td>
                <td>${item.name} - "${item.description}"</td>
                <td>${item.price} </td>
                
            </tr>;

        }
    })
})
