export function crearItemProducto(producto) {
    const item = document.createElement('div');
    item.classList.add('producto');
    item.innerHTML = `
        <img src="${producto.imagen}" alt="${producto.nombre}">
        <h3>${producto.nombre}</h3>
        <div class="precio-agregar">
            <p>${producto.precio}</p>
            <button class="agregar" data-id="${producto.id}">Agregar</button>
        </div>
    `;
    return item;
}