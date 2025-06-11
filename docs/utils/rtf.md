# Utilidad: rtf

Formatea fechas relativas en español (hace 2 días, hace 1 mes, etc.) usando `Intl.RelativeTimeFormat`.

## API
- `getRTF(date)`: devuelve una cadena relativa a la fecha actual.

## Ejemplo de uso
```js
import { getRTF } from '../utils/rtf'
getRTF(new Date()) // 'hoy', 'hace 2 días', etc.
```
