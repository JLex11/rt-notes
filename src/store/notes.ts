import { atom } from 'nanostores'
import { NOTES } from '../mocks/notes'
import type { Note } from '../types'

export const notes = atom(NOTES)

export const addNote = (note: Note) => {
  notes.set([...notes.get(), note])
}

export const removeNote = (noteId: number) => {
  notes.set(notes.get().filter(note => note.id !== noteId))
}

export const updateNote = (note: Note) => {
  notes.set(notes.get().map(n => (n.id === note.id ? note : n)))
}

export const getNote = (noteId: number) => {
  return notes.get().find(note => note.id === noteId)
}
