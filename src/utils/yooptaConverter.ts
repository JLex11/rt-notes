import type { TextNode, YooptaBlockData } from '../types'
import { generateId } from '../utils/helpers'

/**
 * Convierte texto plano al formato de Yoopta-Editor
 */
export function convertTextToYoopta(text: string): YooptaBlockData[] {
	const blocks: YooptaBlockData[] = []
	const lines = text.split('\n').filter(line => line.trim() !== '')

	let order = 0
	let i = 0

	while (i < lines.length) {
		const line = lines[i].trim()

		// Lista con viñetas - agrupar elementos consecutivos
		if (line.startsWith('- ')) {
			const listItems = []

			// Recoger todos los elementos consecutivos de la lista
			while (i < lines.length && lines[i].trim().startsWith('- ')) {
				listItems.push({ text: lines[i].trim().substring(2) })
				i++
			}

			blocks.push({
				id: generateId(),
				type: 'BulletedList',
				value: [
					{
						id: generateId(),
						type: 'bulleted-list',
						children: listItems,
						props: { nodeType: 'block' },
					},
				],
				meta: { order: order++, depth: 0, align: 'left' },
			})

			continue // Evitar incrementar i al final del bucle
		}

		// Lista numerada - agrupar elementos consecutivos
		if (/^\d+\.\s/.test(line)) {
			const listItems = []

			// Recoger todos los elementos consecutivos de la lista numerada
			while (i < lines.length && /^\d+\.\s/.test(lines[i].trim())) {
				const cleanText = lines[i].trim().replace(/^\d+\.\s/, '')
				listItems.push({ text: cleanText })
				i++
			}

			blocks.push({
				id: generateId(),
				type: 'NumberedList',
				value: [
					{
						id: generateId(),
						type: 'numbered-list',
						children: listItems,
						props: { nodeType: 'block' },
					},
				],
				meta: { order: order++, depth: 0, align: 'left' },
			})

			continue // Evitar incrementar i al final del bucle
		}

		// Párrafo normal
		// Detectar texto con formato especial
		const children: TextNode[] = []

		// Detectar texto en mayúsculas como énfasis
		if (line.includes('ALTA') || line.includes('URGENTE')) {
			const parts = line.split(/(ALTA|URGENTE)/)
			for (const part of parts) {
				if (part === 'ALTA' || part === 'URGENTE') {
					children.push({ text: part, bold: true })
				} else if (part.trim() !== '') {
					children.push({ text: part })
				}
			}
		} else {
			children.push({ text: line })
		}

		blocks.push({
			id: generateId(),
			type: 'Paragraph',
			value: [
				{
					id: generateId(),
					type: 'paragraph',
					children,
					props: { nodeType: 'block' },
				},
			],
			meta: { order: order++, depth: 0, align: 'left' },
		})

		i++
	}

	return blocks
}
