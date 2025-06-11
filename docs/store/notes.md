# Store: notes

Store reactivo para gestionar la lista de notas en la aplicación usando nanostores.

## Características
- Almacena todas las notas cargadas.
- Permite agregar, eliminar, actualizar y obtener notas por ID.
- Reactivo: los componentes se actualizan automáticamente al cambiar el store.

## API
- `notes`: store principal (array de notas).
- `addNote(note)`: agrega una nota.
- `removeNote(noteId)`: elimina una nota por ID.
- `updateNote(note)`: actualiza una nota existente.
- `getNote(noteId)`: obtiene una nota por ID.

## Ejemplo de uso
```tsx
import { notes, addNote, removeNote, updateNote, getNote } from '../store/notes'
```
