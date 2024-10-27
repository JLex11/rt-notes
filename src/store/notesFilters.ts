import { atom } from "nanostores"
import { NOTES_TYPES } from "../consts"

interface NoteFilters {
  search: string
  type: keyof typeof NOTES_TYPES | null
  date: Date | null
}

export const noteFilters = atom<NoteFilters>({
  search: '',
  type: null,
  date: null
})

export const setSearch = (search: string) => {
  noteFilters.set({ ...noteFilters.get(), search })
}

export const setType = (type: NoteFilters['type']) => {
  console.log(type)
  noteFilters.set({ ...noteFilters.get(), type })
}

export const setDate = (date: Date) => {
  noteFilters.set({ ...noteFilters.get(), date })
}

export const resetFilters = () => {
  noteFilters.set({ search: '', type: null, date: null })
}