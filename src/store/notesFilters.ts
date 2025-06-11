import { atom } from 'nanostores'
import type { NOTES_TYPES } from '../consts'

interface NoteFilters {
	search: string
	type: keyof typeof NOTES_TYPES | null
	date: Date | null
	activeFilters: boolean
}

export const noteFilters = atom<NoteFilters>({
	search: '',
	type: null,
	date: null,
	activeFilters: false,
})

export const setSearch = (search: string) => {
	noteFilters.set({ ...noteFilters.get(), search, activeFilters: search.length > 0 })
}

export const setType = (type: NoteFilters['type']) => {
	noteFilters.set({ ...noteFilters.get(), type, activeFilters: Boolean(type) && type !== 'todo' })
}

export const setDate = (date: Date) => {
	noteFilters.set({ ...noteFilters.get(), date, activeFilters: Boolean(date) })
}

export const resetFilters = () => {
	noteFilters.set({ search: '', type: null, date: null, activeFilters: false })
}
