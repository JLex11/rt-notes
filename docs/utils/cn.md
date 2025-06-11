# Utilidad: cn

Función utilitaria para combinar clases CSS condicionalmente usando `clsx` y `tailwind-merge`.

## Características
- Simplifica la composición de clases Tailwind.
- Elimina duplicados y conflictos.

## Uso Básico
```js
import cn from '../utils/cn'

const clases = cn('bg-red-500', condicion && 'text-white')
```
