# Componente NoteContentRenderer

Este componente permite renderizar contenido en formato Yoopta-Editor sin necesidad de cargar un editor completo.

## Cambios recientes (junio 2025)

- **Listas agrupadas**: Ahora los elementos consecutivos de listas (tanto numeradas como con viñetas) se agrupan en un solo bloque y se renderizan en un único `<ul>` o `<ol>`, mostrando correctamente la numeración y los ítems.
- **Renderizado de listas**: El componente detecta los hijos de tipo lista y los renderiza como múltiples `<li>` dentro de un solo `<ul>` o `<ol>`, evitando la creación de listas separadas para cada elemento.
- **Ejemplo actualizado**: Ver ejemplos abajo para la nueva estructura y salida HTML.

## Uso Básico

```tsx
import NoteContentRenderer from './components/NoteContentRenderer'
import { NOTES } from './mocks/notes'

function MyComponent() {
  const note = NOTES[0] // Primera nota
  
  return (
    <div>
      <h1>{note.title}</h1>
      <NoteContentRenderer content={note.content} />
    </div>
  )
}
```

## Características

### ✅ Tipos de contenido soportados:
- **Párrafos** (`Paragraph`)
- **Listas con viñetas** (`BulletedList`)
- **Listas numeradas** (`NumberedList`)
- **Encabezados** (`Heading`)
- **Citas** (`Blockquote`)

### ✅ Formato de texto soportado:
- **Negrita** (`bold: true`)
- **Cursiva** (`italic: true`)
- **Subrayado** (`underline: true`)
- **Tachado** (`strikethrough: true`)
- **Código** (`code: true`)

### ✅ Funciones helper:
- `extractTextFromYooptaContent()`: Extrae texto plano para búsquedas
- Ordenamiento automático por `meta.order`
- Manejo de contenido vacío

## Ejemplo de renderizado

**Entrada (formato Yoopta-Editor):**
```typescript
const content = [
  {
    id: "abc123",
    type: "Paragraph",
    value: [{
      id: "def456",
      type: "paragraph",
      children: [
        { text: "Este texto está en " },
        { text: "negrita", bold: true },
        { text: " y este en " },
        { text: "cursiva", italic: true }
      ],
      props: { nodeType: "block" }
    }],
    meta: { order: 0, depth: 0, align: "left" }
  },
  {
    id: "ghi789",
    type: "NumberedList",
    value: [{
      id: "jkl012",
      type: "numbered-list",
      children: [
        { text: "Primer elemento" },
        { text: "Segundo elemento" },
        { text: "Tercer elemento" }
      ],
      props: { nodeType: "block" }
    }],
    meta: { order: 1, depth: 0, align: "left" }
  },
  {
    id: "mno345",
    type: "BulletedList",
    value: [{
      id: "pqr678",
      type: "bulleted-list",
      children: [
        { text: "Elemento A" },
        { text: "Elemento B" }
      ],
      props: { nodeType: "block" }
    }],
    meta: { order: 2, depth: 0, align: "left" }
  }
]
```

**Salida (HTML renderizado):**
```html
<div class="prose prose-sm max-w-none">
  <div>
    <p class="mb-2 text-sm leading-relaxed">
      <span>Este texto está en </span>
      <strong><span>negrita</span></strong>
      <span> y este en </span>
      <em><span>cursiva</span></em>
    </p>
  </div>
  <div>
    <ol class="list-decimal list-inside mb-2 space-y-1">
      <li class="text-sm leading-relaxed">
        <span>Primer elemento</span>
      </li>
      <li class="text-sm leading-relaxed">
        <span>Segundo elemento</span>
      </li>
      <li class="text-sm leading-relaxed">
        <span>Tercer elemento</span>
      </li>
    </ol>
  </div>
  <div>
    <ul class="list-disc list-inside mb-2 space-y-1">
      <li class="text-sm leading-relaxed">
        <span>Elemento A</span>
      </li>
      <li class="text-sm leading-relaxed">
        <span>Elemento B</span>
      </li>
    </ul>
  </div>
</div>
```

## Integración con NoteList

El componente `NoteList` ahora usa automáticamente `NoteContentRenderer` para mostrar el contenido de las notas con formato rico en lugar de texto plano. Las listas se muestran correctamente agrupadas.

## Clases CSS aplicadas

- **Párrafos**: `mb-2 text-sm leading-relaxed`
- **Listas**: `list-disc list-inside mb-2 space-y-1` (viñetas) / `list-decimal list-inside mb-2 space-y-1` (numeradas)
- **Encabezados**: Tamaños variables (`text-lg`, `text-base`, `text-sm`) con `font-bold`
- **Código**: `bg-gray-200 px-1 py-0.5 rounded text-sm font-mono`
- **Citas**: `border-l-2 border-gray-300 pl-3 italic text-sm mb-2`

El componente está diseñado para ser ligero y eficiente, renderizando solo la vista de lectura sin la funcionalidad de edición.
