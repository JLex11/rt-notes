# Formato de Contenido Yoopta-Editor

Este proyecto ahora utiliza el formato de Yoopta-Editor para el contenido de las notas, lo que permite una representación rica y estructurada del texto.

## Estructura de Datos

### YooptaBlockData
Cada bloque de contenido tiene la siguiente estructura:

```typescript
interface YooptaBlockData {
  id: string              // ID único generado automáticamente
  type: string           // Tipo de bloque: 'Paragraph', 'BulletedList', 'NumberedList', etc.
  value: SlateElement[]  // Array de elementos Slate
  meta: YooptaBlockBaseMeta // Metadatos del bloque
}
```

### YooptaBlockBaseMeta
Metadatos del bloque:

```typescript
interface YooptaBlockBaseMeta {
  order: number                          // Orden del bloque (0, 1, 2...)
  depth: number                         // Profundidad de anidación (0 = raíz)
  align?: 'left' | 'center' | 'right'  // Alineación del contenido
}
```

### SlateElement
Elementos individuales dentro de un bloque:

```typescript
interface SlateElement {
  id: string                           // ID único del elemento
  type: string                        // Tipo: 'paragraph', 'bulleted-list', 'numbered-list'
  children: Array<TextNode | SlateElement> // Contenido del elemento
  props: {
    nodeType: 'block' | 'inline' | 'void'
    [key: string]: unknown
  }
}
```

### TextNode
Nodos de texto con formato:

```typescript
interface TextNode {
  text: string
  bold?: boolean        // Texto en negrita
  italic?: boolean      // Texto en cursiva
  underline?: boolean   // Texto subrayado
  strikethrough?: boolean // Texto tachado
  code?: boolean        // Texto de código
}
```

## Tipos de Bloques Soportados

### 1. Paragraph
Para texto normal y párrafos:

```typescript
{
  id: "unique-id",
  type: "Paragraph",
  value: [{
    id: "element-id",
    type: "paragraph",
    children: [{ text: "Este es un párrafo normal" }],
    props: { nodeType: "block" }
  }],
  meta: { order: 0, depth: 0, align: "left" }
}
```

### 2. BulletedList
Para listas con viñetas:

```typescript
{
  id: "unique-id",
  type: "BulletedList",
  value: [{
    id: "element-id",
    type: "bulleted-list",
    children: [{ text: "Elemento de lista con viñeta" }],
    props: { nodeType: "block" }
  }],
  meta: { order: 1, depth: 0, align: "left" }
}
```

### 3. NumberedList
Para listas numeradas:

```typescript
{
  id: "unique-id",
  type: "NumberedList",
  value: [{
    id: "element-id",
    type: "numbered-list",
    children: [{ text: "Elemento de lista numerada" }],
    props: { nodeType: "block" }
  }],
  meta: { order: 2, depth: 0, align: "left" }
}
```

## Conversión Automática

El proyecto incluye un convertidor automático (`yooptaConverter.ts`) que transforma texto plano al formato Yoopta-Editor:

- **Texto normal** → `Paragraph`
- **Líneas que empiezan con "- "** → `BulletedList`
- **Líneas que empiezan con "1. ", "2. ", etc.** → `NumberedList`
- **Texto con "ALTA" o "URGENTE"** → Párrafo con texto en **negrita**

## Ejemplo de Uso

```typescript
import { convertTextToYoopta } from '../utils/yooptaConverter'

const textoOriginal = `Reunión importante:
- Revisar el proyecto
- Definir siguientes pasos
1. Análisis de requisitos
2. Desarrollo de prototipo
Prioridad: ALTA`

const bloques = convertTextToYoopta(textoOriginal)
// Resultado: Array de YooptaBlockData con los bloques correspondientes
```

## Beneficios del Nuevo Formato

1. **Estructura Rica**: Permite diferentes tipos de contenido (párrafos, listas, etc.)
2. **Formato de Texto**: Soporte para negrita, cursiva y otros estilos
3. **Metadatos**: Información adicional como orden, profundidad y alineación
4. **Extensibilidad**: Fácil agregar nuevos tipos de bloques en el futuro
5. **Compatibilidad**: Compatible con editores WYSIWYG como Yoopta-Editor

## Migración

Todas las notas existentes han sido automáticamente convertidas al nuevo formato manteniendo:
- El contenido original
- La estructura de listas y párrafos
- El formato de texto especial (ALTA, URGENTE en negrita)
- Todos los metadatos de las notas (fecha, autor, tipo, etc.)
