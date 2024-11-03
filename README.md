# RT Notes

![Project Logo](path/to/your/logo.png)

RT Notes es una aplicación para gestionar notas, recordatorios y tareas. Está construida con Astro, Preact y Tailwind CSS.

## Estructura del Proyecto

```plaintext
.
├── .astro/
│   ├── settings.json
│   ├── types.d.ts
├── .gitignore
├── .idea/
│   ├── .gitignore
│   ├── modules.xml
│   ├── rt-notes.iml
│   ├── vcs.xml
│   ├── workspace.xml
├── .vscode/
│   ├── extensions.json
│   ├── launch.json
│   ├── settings.json
├── astro.config.mjs
├── biome.json
├── bun.lockb
├── package.json
├── public/
├── README.md
├── src/
│   ├── components/
│   │   ├── CommandMenu.tsx
│   │   ├── DateFilterList.astro
│   │   ├── FilterBar.astro
│   │   ├── NoteList.tsx
│   ├── consts.ts
│   ├── env.d.ts
│   ├── hooks/
│   │   ├── useScreenColumns.ts
│   ├── icons/
│   │   ├── FilterIcon.astro
│   ├── layouts/
│   │   ├── Layout.astro
│   ├── mocks/
│   │   ├── notes.ts
│   ├── pages/
│   │   ├── index.astro
│   ├── store/
│   │   ├── notes.ts
│   │   ├── notesFilters.ts
│   ├── utils/
│   │   ├── calendarDates.ts
│   │   ├── cn.ts
│   │   ├── helpers.ts
│   │   ├── horizontalScroll.ts
│   │   ├── rtf.ts
│   ├── types.d.ts
│   ├── noteContentMock.ts
│   ├── noteTypes.ts
├── tailwind.config.mjs
├── tsconfig.json
```

## Instalación

1. Clona el repositorio:
  
  ```bash
  git clone https://github.com/tu-usuario/rt-notes.git
  ```

2. Navega al directorio del proyecto:
  
  ```bash
  cd rt-notes
  ```

3. Instala las dependencias:
  
  ```bash
  bun install
  ```


## Scripts Disponibles

- `dev`: Inicia el servidor de desarrollo.

  ```bash
  bun dev
  ```

- `build`: Compila el proyecto para producción.
  
  ```bash
  bun build
  ```

- `preview`: Previsualiza la compilación de producción.

  ```bash
  bun preview
  ```
## Uso

Para iniciar la aplicación en modo desarrollo, ejecuta:
  
  ```bash
  bun dev
  ```
Luego, abre tu navegador y navega a `http://localhost:3000`

## Estructura de Componentes
- **DateFilterList**: Componente para filtrar notas por fecha.
- **FilterBar**: Barra de filtros para las notas.
- **NoteList**: Lista de notas, renderizada en columnas.
- **NotesTypeFilters**: Filtros por tipo de nota.

## Configuración de Tailwind CSS
El archivo de configuración de Tailwind CSS se encuentra en `tailwind.config.mjs` y está configurado para escanear todos los archivos en src con las extensiones `.astro`, `.html`, `.js`, `.jsx`, `.md`, `.mdx`, `.svelte`, `.ts`, `.tsx`, y `.vue`.

## Contribuciones
Las contribuciones son bienvenidas. Por favor, abre un issue o un pull request para discutir cualquier cambio que desees realizar.

## Licencia
Este proyecto está bajo la Licencia MIT. Consulta el archivo LICENSE para más detalles.

(Project Screenshot)