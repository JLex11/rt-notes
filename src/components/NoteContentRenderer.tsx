import type { ReactElement } from 'react'
import type { SlateElement, TextNode, YooptaBlockData } from '../types'

interface NoteContentRendererProps {
	content: YooptaBlockData[]
}

/**
 * Renderiza un nodo de texto con su formato
 */
function renderTextNode(textNode: TextNode, index: number): ReactElement {
	const { text, bold, italic, underline, strikethrough, code } = textNode

	let element = <span key={index}>{text}</span>

	if (code) {
		element = (
			<code key={index} className='bg-gray-200 px-1 py-0.5 rounded text-sm font-mono'>
				{text}
			</code>
		)
	}

	if (bold) element = <strong key={index}>{element}</strong>
	if (italic) element = <em key={index}>{element}</em>
	if (underline) element = <u key={index}>{element}</u>
	if (strikethrough) element = <s key={index}>{element}</s>

	return element
}

/**
 * Renderiza los hijos de un elemento Slate
 */
function renderSlateChildren(children: Array<TextNode | SlateElement>): ReactElement[] {
	return children.map((child, index) => {
		if ('text' in child) return renderTextNode(child, index)
		return renderSlateElement(child, index)
	})
}

/**
 * Renderiza un elemento Slate
 */
function renderSlateElement(element: SlateElement, index: number): ReactElement {
	const children = renderSlateChildren(element.children)

	// Renderizado basado en el tipo de elemento
	if (element.type === 'paragraph') {
		return (
			<p key={index} className='mb-2 text-sm leading-relaxed'>
				{children}
			</p>
		)
	}

	if (element.type.startsWith('heading')) {
		const level = Number.parseInt(element.type.replace('heading-', '')) || 1
		const headingClasses =
			{
				1: 'text-lg font-bold mb-2',
				2: 'text-base font-bold mb-2',
				3: 'text-sm font-bold mb-1',
			}[level] || 'text-sm font-semibold mb-1'

		// Usar componentes específicos en lugar de dinámicos
		if (level === 1) {
			return (
				<h3 key={index} className={headingClasses}>
					{children}
				</h3>
			)
		}

		if (level === 2) {
			return (
				<h4 key={index} className={headingClasses}>
					{children}
				</h4>
			)
		}

		return (
			<h5 key={index} className={headingClasses}>
				{children}
			</h5>
		)
	}

	if (element.type === 'blockquote') {
		return (
			<blockquote key={index} className='border-l-2 border-gray-300 pl-3 italic text-sm mb-2'>
				{children}
			</blockquote>
		)
	}

	// Elemento genérico
	return (
		<div key={index} className='text-sm mb-1'>
			{children}
		</div>
	)
}

/**
 * Renderiza un bloque de Yoopta-Editor
 */
function renderYooptaBlock(block: YooptaBlockData): ReactElement {
	const element = block.value[0] // Cada bloque tiene un elemento principal

	// Renderizado basado en el tipo de bloque
	if (block.type === 'Paragraph') {
		return renderSlateElement(element, 0)
	}

	if (block.type === 'BulletedList') {
		// Renderizar cada elemento hijo como un <li>
		const listItems = element.children.map((child, index) => (
			<li key={`bulleted-${block.id}-${index}`} className='text-sm leading-relaxed'>
				{'text' in child ? renderTextNode(child, index) : renderSlateElement(child, index)}
			</li>
		))
		return <ul className='list-disc list-inside mb-2 space-y-1'>{listItems}</ul>
	}

	if (block.type === 'NumberedList') {
		// Renderizar cada elemento hijo como un <li>
		const listItems = element.children.map((child, index) => (
			<li key={`numbered-${block.id}-${index}`} className='text-sm leading-relaxed'>
				{'text' in child ? renderTextNode(child, index) : renderSlateElement(child, index)}
			</li>
		))
		return <ol className='list-decimal list-inside mb-2 space-y-1'>{listItems}</ol>
	}

	if (block.type === 'Heading') return renderSlateElement(element, 0)
	if (block.type === 'Blockquote') return renderSlateElement(element, 0)

	// Bloque genérico
	return <div className='mb-2'>{renderSlateElement(element, 0)}</div>
}

/**
 * Componente principal para renderizar contenido de Yoopta-Editor
 */
export default function NoteContentRenderer({ content }: NoteContentRendererProps): ReactElement {
	if (!content || content.length === 0) {
		return <p className='text-gray-500 text-sm italic'>Contenido vacío</p>
	}

	return (
		<div className='prose prose-sm max-w-none'>
			{content
				.sort((a, b) => a.meta.order - b.meta.order) // Ordenar por meta.order
				.map((block, index) => (
					<div key={block.id || index}>{renderYooptaBlock(block)}</div>
				))}
		</div>
	)
}

/**
 * Convierte el contenido de Yoopta-Editor a texto plano para búsquedas
 */
export function extractTextFromYooptaContent(content: YooptaBlockData[]): string {
	return content
		.sort((a, b) => a.meta.order - b.meta.order)
		.map(block => {
			const element = block.value[0]
			return extractTextFromSlateElement(element)
		})
		.join(' ')
}

/**
 * Extrae texto de un elemento Slate
 */
function extractTextFromSlateElement(element: SlateElement): string {
	return element.children
		.map(child => {
			if ('text' in child) {
				return child.text
			}
			return extractTextFromSlateElement(child)
		})
		.join('')
}
