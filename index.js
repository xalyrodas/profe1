import { cargarHeader } from './header/header.js';
import { cargarCatalogo } from './contenido/catalogo.js';

document.addEventListener('DOMContentLoaded', () => {
    cargarHeader();
    cargarCatalogo();
});