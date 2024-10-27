import { useStore } from "@nanostores/preact"
import { NOTES_TYPES } from "../consts"
import { notes as notesStore } from "../store/notes"
import { noteFilters, setType } from "../store/notesFilters"
import cn from "../utils/cn"

export default function NotesTypeFilter() {
  const notes = useStore(notesStore)
  const notesFilters = useStore(noteFilters)

  const filteredNotes = notes.filter(note => {
    const search = notesFilters.search.toLowerCase()
    const date = notesFilters.date

    return (
      note.title.toLowerCase().includes(search) &&
      (date === null || note.date === date)
    )
  })

  const filterIsActived = (type: string | null) => {
    return notesFilters.type === (type as keyof typeof NOTES_TYPES)
  }

  return (
    <ul class='flex gap-3 items-center p-1'>
      <li
        class={cn('border border-gray-300 px-3 py-1 rounded-xl hover:shadow hover:[-webkit-text-stroke-width:0.2px] transition-all', filterIsActived(null) ? 'bg-black text-white' : 'bg-gray-100 text-black')}
        onClick={() => setType(null)}
      >
        <button type="button" class='bg-transparent border-none'>Todas ({filteredNotes.length})</button>
      </li>
      {
        Object.entries(NOTES_TYPES).map(([key, value]) => (
          <li
            class={cn('border border-gray-300 px-3 py-1 rounded-xl hover:shadow hover:[-webkit-text-stroke-width:0.2px] transition-all', filterIsActived(key) ? value.activeStyle : value.color)}
            onClick={() => setType(key as keyof typeof NOTES_TYPES)}
          >
            <button type="button" class='bg-transparent border-none'>
              {value.label} ({filteredNotes.filter(note => note.type === key).length})
            </button>
          </li>
        ))
      }
    </ul>
  )
}