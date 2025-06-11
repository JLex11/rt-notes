import type { NOTES_TYPES } from './consts'

// Tipos para Yoopta-Editor
export interface YooptaBlockBaseMeta {
	order: number
	depth: number
	align?: 'left' | 'center' | 'right'
}

export interface SlateElement {
	id: string
	type: string
	children: Array<TextNode | SlateElement>
	props: {
		nodeType: 'block' | 'inline' | 'void'
		[key: string]: unknown
	}
}

export interface TextNode {
	text: string
	bold?: boolean
	italic?: boolean
	underline?: boolean
	strikethrough?: boolean
	code?: boolean
}

export interface YooptaBlockData {
	id: string
	type: string
	value: SlateElement[]
	meta: YooptaBlockBaseMeta
}

export interface Note {
		id: number
		title: string
		content: YooptaBlockData[]
		date: Date
		author: string
		type: keyof typeof NOTES_TYPES
	}
