export function cargarHeader() {
    const header = document.getElementById('header');
    header.innerHTML = `
        <div class="titulo">Catálogo de Productos</div>
        <div class="contador-container">
            <span>Productos marcados:</span>
            <div id="contador">0</div>
        </div>
    `;
}