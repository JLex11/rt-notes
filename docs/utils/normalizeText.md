# Utilidad: normalizeText

Normaliza texto para búsquedas insensibles a mayúsculas, tildes y diacríticos.

## Características
- Elimina tildes y diacríticos.
- Convierte a minúsculas.

## Uso Básico
```js
import { normalizeText } from '../utils/normalizeText'
const texto = normalizeText('Árbol') // 'arbol'
```
