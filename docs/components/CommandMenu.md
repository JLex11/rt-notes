# Componente CommandMenu

Este componente provee un menú de comandos global accesible mediante el atajo `Ctrl+K` o `Cmd+K`, permitiendo búsquedas rápidas y acciones dentro de la aplicación.

## Características
- Basado en la librería [cmdk](https://cmdk.paco.me/).
- Acceso rápido mediante teclado.
- Entrada de búsqueda y lista de comandos.
- Apariencia flotante y centrada.

## Uso Básico
```tsx
import CommandMenu from './components/CommandMenu'

function App() {
  return <CommandMenu />
}
```

## Accesibilidad
- Se abre/cierra con `Ctrl+K` o `Cmd+K`.
- Cierra automáticamente al perder foco.

## Personalización
Puedes agregar comandos personalizados modificando los hijos de `<CommandList>`.
