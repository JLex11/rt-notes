# Store: noteFilters

Store reactivo para gestionar los filtros aplicados a la lista de notas.

## Características
- Filtro de búsqueda por texto.
- Filtro por tipo de nota.
- Filtro por fecha.
- Indica si hay filtros activos.

## API
- `noteFilters`: store principal (objeto de filtros).
- `setSearch(texto)`: actualiza el filtro de búsqueda.
- `setType(tipo)`: actualiza el filtro de tipo.
- `setDate(fecha)`: actualiza el filtro de fecha.
- `resetFilters()`: reinicia todos los filtros.

## Ejemplo de uso
```tsx
import { noteFilters, setSearch, setType, setDate, resetFilters } from '../store/notesFilters'
```
