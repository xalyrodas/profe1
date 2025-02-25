function crearProducto(producto) {
    const div = document.createElement("div");
    div.classList.add("producto");
    div.dataset.id = producto.id;
    div.innerHTML = `
        <div class="imagen">[Imagen]</div>
        <p>${producto.nombre}</p>
        <p>Q ${producto.precio.toFixed(2)}</p>
        <button class="agregar" data-id="${producto.id}">Agregar</button>
    `;
    return div;
}
