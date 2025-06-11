# Componente NoteList

Renderiza la lista de notas aplicando filtros de búsqueda, tipo y fecha. Utiliza `NoteContentRenderer` para mostrar el contenido con formato.

## Características
- Filtrado eficiente por texto, tipo y fecha.
- Renderizado reactivo usando nanostores.
- Integración con `NoteContentRenderer` para mostrar contenido enriquecido.
- Preparado para soporte de columnas responsivas.

## Uso Básico
```tsx
import NoteList from './components/NoteList'

function App() {
  return <NoteList />
}
```

## Personalización
Puedes modificar los filtros desde `store/notesFilters` y la estructura de las notas desde `store/notes`.
