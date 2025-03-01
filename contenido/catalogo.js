import { dataProductos } from './data.js';
import { agregarProducto } from './funcionesProducto.js';
import { crearItemProducto } from './itemProducto.js';

export function cargarCatalogo() {
    const catalogo = document.getElementById('catalogo');
    dataProductos.forEach(producto => {
        const item = crearItemProducto(producto);
        catalogo.appendChild(item);
    });
}

document.addEventListener('click', (event) => {
    if (event.target.classList.contains('agregar')) {
        const productoId = event.target.dataset.id;
        agregarProducto(productoId);
    }
});