import type { NOTES_TYPES } from './consts'

export interface Note {
		id: number
		title: string
		content: string
		date: Date
		author: string
		type: keyof typeof NOTES_TYPES
	}
