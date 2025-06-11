# Utilidad: calendarDates

Funciones para generar y manipular rangos de fechas para filtros y visualización.

## API
- `generateDates({ startDate, daysCount })`: genera un array de objetos de fecha para un rango dado.
- `generateMoreDates({ daysCount })`: extiende el rango de fechas generado previamente.

## Ejemplo de uso
```js
import { generateDates } from '../utils/calendarDates'
const fechas = generateDates({ daysCount: 14 })
```

## Formato de salida
Cada fecha incluye: día, número, mes y si está activa.
