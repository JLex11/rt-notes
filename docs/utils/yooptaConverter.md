# Utilidad: yooptaConverter

Convierte texto plano al formato estructurado Yoopta-Editor para notas enriquecidas.

## Características
- Detecta listas, párrafos y palabras clave para formato especial.
- Agrupa elementos consecutivos de listas.
- Genera bloques con metadatos y estructura compatible con Yoopta-Editor.

## API
- `convertTextToYoopta(text)`: convierte texto plano a bloques Yoopta.

## Ejemplo de uso
```js
import { convertTextToYoopta } from '../utils/yooptaConverter'
const bloques = convertTextToYoopta('1. Primer punto\n- Elemento')
```
