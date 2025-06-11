# Hook useScreenColumns

Hook personalizado para calcular el número de columnas a mostrar según el ancho de pantalla y breakpoints definidos.

## Características
- Devuelve el número óptimo de columnas para el layout.
- Soporta breakpoints personalizables.
- Incluye debounce para evitar renders excesivos.

## Uso Básico
```tsx
import useScreenColumns from '../hooks/useScreenColumns'

const columns = useScreenColumns({ initialColumns: 3 })
```

## Props
- `initialColumns`: columnas por defecto.
- `breakpoints`: objeto `{ ancho: columnas }`.
- `debounceMs`: tiempo de espera para recalcular.

## Ejemplo de breakpoints
```js
{
  640: 1,
  768: 2,
  1024: 3,
  1280: 4,
  1536: 5,
}
```
