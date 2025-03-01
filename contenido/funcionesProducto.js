let productosAgregados = 0;

export function agregarProducto(id) {
    productosAgregados++;
    document.getElementById('contador').textContent = productosAgregados;
}