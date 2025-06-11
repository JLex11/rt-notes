# Utilidad: horizontalScroll

Permite habilitar el scroll horizontal suave en elementos contenedores (por ejemplo, listas de fechas).

## Características
- Scroll horizontal con el mouse (rueda o trackpad).
- Animación suave y configurable.
- Previene el scroll vertical accidental.

## API
- `enableHorizontalScroll(element, { scrollSpeed, smoothingFactor })`

## Ejemplo de uso
```js
import { enableHorizontalScroll } from '../utils/horizontalScroll'
enableHorizontalScroll(document.querySelector('ul'))
```
