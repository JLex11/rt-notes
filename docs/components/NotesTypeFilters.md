# Componente NotesTypeFilters

Permite filtrar notas por tipo (por ejemplo: todas, personales, trabajo, etc.) mostrando la cantidad de notas por tipo.

## Características
- Botones para cada tipo de nota.
- Muestra el número de notas por tipo.
- Estado visual para el filtro activo.
- Integración con nanostores para reactividad.

## Uso Básico
```tsx
import NotesTypeFilters from './components/NotesTypeFilters'

function App() {
  return <NotesTypeFilters />
}
```

## Personalización
Puedes definir los tipos de nota en `consts.ts` y modificar el comportamiento en `store/notesFilters`.
