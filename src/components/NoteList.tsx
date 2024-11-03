import { useStore } from "@nanostores/preact"
import { useMemo } from "preact/hooks"
import { NOTES_TYPES } from "../consts"
import useScreenColumns from "../hooks/useScreenColumns"
import { notes as notesStore } from "../store/notes"
import { noteFilters } from "../store/notesFilters"
import cn from "../utils/cn"
import { partitionByColumns } from "../utils/helpers"
import { getRTF } from "../utils/rtf"

export default function NoteList() {
  const notes = useStore(notesStore)
  const notesFilters = useStore(noteFilters)
  const columns = useScreenColumns({ initialColumns: 5 })

  const filteredNotesIds = useMemo(() => notes.filter(note => {
    const search = notesFilters.search.toLowerCase()
    const type = notesFilters.type
    const date = notesFilters.date

    const noteSearchable = note.title + note.content

    return (
      noteSearchable.toLowerCase().includes(search) &&
      (type === null || note.type === type) &&
      (date === null || note.date === date)
    )
  }).map(note => note.id), [notes, notesFilters])

  const isFiltered = (noteId: number) => {
    return !filteredNotesIds.includes(noteId)
  }
  
  const NOTES_BY_COLUMN = useMemo(() => partitionByColumns(notes, columns), [notes, columns]);

  const getNoteTypeColor = (type: string) => {
    return NOTES_TYPES[type as keyof typeof NOTES_TYPES]?.color
  }

  return (
    <ul class='flex items-start gap-5'>
      {
        NOTES_BY_COLUMN.map(notes => (
          <li data-column class='w-[-webkit-fill-available]'>
            <ul data-row class='flex flex-col gap-5 items-start'>
              {notes.map(note => (
                <li>
                  <article
                    class={cn('flex flex-col p-4 rounded-2xl bg-gray-100 gap-4 shadow transition-opacity', getNoteTypeColor(note.type), isFiltered(note.id) && 'opacity-20')}
                  >
                    <h2 class='font-bold'>{note.title}</h2>
                    <p class='text-sm'>{note.content}</p>
                    <footer>
                      <small class='text-sm flex items-center gap-1'><span class='select-none'>📅</span><span class='opacity-75'>{getRTF(note.date)}</span></small>
                    </footer>
                  </article>
                </li>
              ))}
            </ul>
          </li>
        ))
      }
    </ul>
  )
}