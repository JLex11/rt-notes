# RT Notes 📝

Una aplicación moderna y eficiente para gestionar notas, recordatorios y tareas. Construida con **Astro**, **React**, **Tailwind CSS** y **TypeScript**.

## ✨ Características

- 🚀 **Ultra rápido** - Construido con Astro para máximo rendimiento
- 🔍 **Búsqueda avanzada** - Menú de comandos con atajos de teclado (Ctrl/Cmd + K)
- 🏷️ **Filtros inteligentes** - Filtra notas por fecha, tipo y contenido
- 📱 **Diseño responsivo** - Optimizado para escritorio y móvil
- 🎨 **Interfaz moderna** - Diseño limpio con Tailwind CSS
- ⚡ **Gestión de estado** - Powered by Nanostores
- 📊 **Vista en columnas** - Visualización adaptativa según el tamaño de pantalla

## 🛠️ Stack Tecnológico

- **[Astro](https://astro.build/)** - Framework web moderno para sitios rápidos
- **[React](https://react.dev/)** - Biblioteca para interfaces de usuario interactivas
- **[TypeScript](https://www.typescriptlang.org/)** - JavaScript con tipado estático
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utility-first
- **[Nanostores](https://github.com/nanostores/nanostores)** - Gestión de estado minimalista
- **[CMDK](https://cmdk.paco.me/)** - Menú de comandos elegante
- **[Biome](https://biomejs.dev/)** - Linter y formateador ultrarrápido

## 📁 Estructura del Proyecto

```plaintext
rt-notes/
├── src/
│   ├── components/          # Componentes React/Astro
│   │   ├── CommandMenu.tsx  # Menú de comandos global
│   │   ├── NoteList.tsx     # Lista de notas con grid responsivo
│   │   ├── FilterBar.astro  # Barra de filtros
│   │   └── ...
│   ├── store/               # Estado global (Nanostores)
│   │   ├── notes.ts         # Store de notas
│   │   └── notesFilters.ts  # Store de filtros
│   ├── utils/               # Utilidades y helpers
│   ├── hooks/               # React hooks personalizados
│   ├── types/               # Definiciones de tipos TypeScript
│   └── pages/               # Páginas de Astro
├── public/                  # Archivos estáticos
└── ...
```

## 🚀 Instalación y Configuración

### Requisitos previos
- [Bun](https://bun.sh/) (recomendado) o [Node.js](https://nodejs.org/) 18+

### Pasos de instalación

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/tu-usuario/rt-notes.git
   cd rt-notes
   ```

2. **Instala las dependencias:**
   ```bash
   bun install
   ```

3. **Inicia el servidor de desarrollo:**
   ```bash
   bun dev
   ```

4. **¡Listo!** Abre tu navegador en `http://localhost:4321`

## 📋 Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `bun dev` | Inicia el servidor de desarrollo |
| `bun build` | Compila el proyecto para producción |
| `bun preview` | Previsualiza la build de producción |
| `bun astro` | Ejecuta comandos de Astro CLI |
## 🎯 Uso

### Comandos de teclado
- **Ctrl/Cmd + K** - Abre el menú de comandos global
- **Escape** - Cierra modales y menús

### Componentes principales

#### 🔍 CommandMenu
Menú de comandos global accesible desde cualquier parte de la aplicación.
```tsx
// Activa con Ctrl/Cmd + K
<CommandMenu />
```

#### 📋 NoteList
Lista de notas con diseño responsivo en columnas que se adapta al tamaño de pantalla.

#### 🏷️ FilterBar
Sistema de filtros para organizar y encontrar notas por:
- Fecha de creación
- Tipo de nota
- Contenido de texto

#### 📅 DateFilterList
Filtro específico por rangos de fechas con navegación intuitiva.

## ⚙️ Configuración

### Tailwind CSS
El proyecto utiliza Tailwind CSS v4 con configuración optimizada:
```javascript
// tailwind.config.mjs
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  // Configuración personalizada...
}
```

### TypeScript
Configuración estricta de TypeScript para mejor desarrollo:
- Tipado fuerte en toda la aplicación
- Definiciones de tipos personalizadas en `src/types/`
- Soporte completo para JSX/TSX

### Estado Global
Gestión de estado con Nanostores:
```typescript
// stores/notes.ts - Estado de notas
// stores/notesFilters.ts - Estado de filtros
```

## 🤝 Contribuir

¡Las contribuciones son bienvenidas! Para contribuir:

1. **Fork** el proyecto
2. **Crea** una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. **Commit** tus cambios (`git commit -m 'Añade nueva funcionalidad'`)
4. **Push** a la rama (`git push origin feature/nueva-funcionalidad`)
5. **Abre** un Pull Request

### Desarrollo

```bash
# Clonar y configurar
git clone https://github.com/tu-usuario/rt-notes.git
cd rt-notes
bun install

# Desarrollo
bun dev          # Servidor de desarrollo
bun build        # Build de producción
bun preview      # Preview de la build

# Linting y formato
bunx biome check --apply  # Auto-fix de formato y linting
```

## 📄 Licencia

Este proyecto está bajo la **Licencia MIT**. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## 🎨 Screenshots

> 📸 *Próximamente: capturas de pantalla de la aplicación*

---

<div align="center">

**RT Notes** - Gestión de notas moderna y eficiente

Construido con ❤️ usando Astro, React y Tailwind CSS

⭐ **¡No olvides dar una estrella si te gustó el proyecto!** ⭐

</div>