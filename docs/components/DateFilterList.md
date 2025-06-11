# Componente DateFilterList

Muestra una lista horizontal de fechas para filtrar notas por día. Permite desplazamiento horizontal suave y selección visual de la fecha activa.

## Características
- Genera fechas dinámicamente (por defecto, 7 días).
- Scroll horizontal con soporte para mouse.
- Destaca la fecha seleccionada.

## Uso Básico
```astro
---
import DateFilterList from './components/DateFilterList.astro'
---
<DateFilterList />
```

## Integración
- Utiliza `generateDates` de `utils/calendarDates`.
- Usa `enableHorizontalScroll` para experiencia móvil y desktop.

## Personalización
Puedes cambiar el rango de fechas modificando la función `generateDates`.
