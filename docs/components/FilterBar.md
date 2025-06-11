# Componente FilterBar

Barra de búsqueda para filtrar notas por texto. Incluye un icono y animaciones de expansión.

## Características
- Input de búsqueda con placeholder.
- Icono de filtro.
- Expansión animada al enfocar.
- Actualiza el filtro global de notas en tiempo real.

## Uso Básico
```astro
---
import FilterBar from './components/FilterBar.astro'
---
<FilterBar />
```

## Integración
- Llama a `setSearch` de `store/notesFilters` al escribir.

## Accesibilidad
- Accesible por teclado y mouse.
