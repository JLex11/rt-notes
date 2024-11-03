import type { Note } from '../types'

export const NOTES: Note[] = [
	{
		id: 1,
		title: 'Reunión con el equipo de desarrollo',
		content:
			'Puntos a tratar:\n- Revisión del sprint actual\n- Planificación del próximo sprint\n- Discusión sobre nuevas tecnologías\n- Feedback del último deployment',
		date: new Date('2024-10-15T10:00:00'),
		author: 'Ana García',
		type: 'important',
	},
	{
		id: 2,
		title: 'Recordatorio: Actualizar dependencias',
		content:
			'Es necesario actualizar las dependencias del proyecto antes del próximo release. Especial atención a las vulnerabilidades de seguridad reportadas en el último análisis.',
		date: new Date('2024-10-20T15:30:00'),
		author: 'Carlos Martínez',
		type: 'reminder',
	},
	{
		id: 3,
		title: 'Ideas para el nuevo diseño',
		content:
			'Brainstorming de la última reunión:\n1. Implementar modo oscuro\n2. Mejorar la accesibilidad\n3. Rediseñar la navegación móvil\n4. Optimizar tiempos de carga',
		date: new Date('2024-09-28T09:15:00'),
		author: 'Laura Sánchez',
		type: 'others',
	},
	{
		id: 4,
		title: 'Testing E2E',
		content:
			'- Configurar Cypress\n- Escribir tests para el flujo de login\n- Automatizar pruebas de formularios\n- Validar integración con API\n- Documentar proceso de testing',
		date: new Date('2024-10-05T14:20:00'),
		author: 'Miguel Rodríguez',
		type: 'todo',
	},
	{
		id: 5,
		title: 'Optimización de rendimiento crítica',
		content:
			'Se han detectado problemas de rendimiento en producción. Necesario optimizar:\n- Queries a base de datos\n- Caché de imágenes\n- Bundle size de JavaScript\nPrioridad: ALTA',
		date: new Date('2024-10-18T11:45:00'),
		author: 'Elena Torres',
		type: 'important',
	},
	{
		id: 6,
		title: 'Documentación API REST',
		content:
			'Actualizar la documentación de la API incluyendo:\n- Nuevos endpoints\n- Ejemplos de uso\n- Códigos de error\n- Rate limiting\n- Autenticación',
		date: new Date('2024-10-12T16:00:00'),
		author: 'David López',
		type: 'others',
	},
	{
		id: 7,
		title: 'Recordatorio: Backup semanal',
		content:
			'No olvidar realizar el backup semanal de:\n- Base de datos\n- Archivos de configuración\n- Logs del sistema\nVerificar integridad después del backup.',
		date: new Date('2024-10-21T08:00:00'),
		author: 'Patricia Ruiz',
		type: 'reminder',
	},
	{
		id: 8,
		title: 'Migración a TypeScript',
		content:
			'Tareas pendientes para la migración:\n1. Identificar archivos prioritarios\n2. Definir interfaces principales\n3. Configurar tsconfig\n4. Actualizar build process\n5. Migrar tests',
		date: new Date('2024-10-25T13:30:00'),
		author: 'Roberto Fernández',
		type: 'todo',
	},
	{
		id: 9,
		title: 'Análisis de métricas Q3',
		content:
			'Resultados destacados del tercer trimestre:\n- Tiempo de carga reducido en 40%\n- Tasa de conversión aumentada al 3.8%\n- Reducción de bouncing rate al 25%\nPróximos objetivos adjuntos en el informe.',
		date: new Date('2024-10-01T09:00:00'),
		author: 'Isabel Moreno',
		type: 'others',
	},
	{
		id: 10,
		title: 'Implementación de PWA',
		content:
			'- Configurar service workers\n- Implementar manifest.json\n- Optimizar assets para offline\n- Configurar push notifications\n- Testear en diferentes dispositivos',
		date: new Date('2024-10-28T11:00:00'),
		author: 'Javier Ruiz',
		type: 'todo',
	},
	{
		id: 11,
		title: 'Recordatorio: Review de código',
		content:
			'Programar sesión de review de código con el equipo junior.\nTemas a cubrir:\n- Mejores prácticas\n- Patrones comunes\n- Manejo de errores\n- Optimización',
		date: new Date('2024-10-22T15:00:00'),
		author: 'Ana García',
		type: 'reminder',
	},
	{
		id: 12,
		title: 'Incidencia: Caída del servidor',
		content:
			'URGENTE: Servidor de producción caído.\nPasos realizados:\n1. Reinicio de servicios\n2. Verificación de logs\n3. Backup de emergencia\nSe requiere análisis profundo de causa raíz.',
		date: new Date('2024-10-19T16:45:00'),
		author: 'Carlos Martínez',
		type: 'important',
	},
	{
		id: 13,
		title: 'Ideas UX/UI Homepage',
		content:
			'Propuestas de mejora:\n- Simplificar el header\n- Añadir testimonios de usuarios\n- Mejorar CTA principal\n- Optimizar para móvil\n- Añadir microinteracciones',
		date: new Date('2024-10-17T10:30:00'),
		author: 'Laura Sánchez',
		type: 'others',
	},
	{
		id: 14,
		title: 'Actualización de seguridad',
		content:
			'Pendiente:\n- Actualizar certificados SSL\n- Revisar permisos de usuarios\n- Actualizar políticas de contraseñas\n- Implementar 2FA\n- Auditar logs de acceso',
		date: new Date('2024-10-30T09:15:00'),
		author: 'Miguel Rodríguez',
		type: 'todo',
	},
	{
		id: 15,
		title: 'Recordatorio: Presentación cliente',
		content:
			'Preparar presentación para el cliente incluyendo:\n- Avances del último mes\n- Métricas de rendimiento\n- Próximas funcionalidades\n- Demo del nuevo diseño',
		date: new Date('2024-10-24T14:00:00'),
		author: 'Elena Torres',
		type: 'reminder',
	},
	{
		id: 16,
		title: 'Plan de escalabilidad Q4',
		content:
			'Puntos críticos:\n- Migración a microservicios\n- Implementación de load balancing\n- Optimización de bases de datos\n- Configuración de auto-scaling\nPresupuesto adjunto en el documento.',
		date: new Date('2024-10-16T13:00:00'),
		author: 'David López',
		type: 'important',
	},
]
