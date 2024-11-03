import { useStore } from '@nanostores/preact'
import { useMemo } from 'preact/hooks'
import { NOTES_TYPES } from '../consts'
import { notes as notesStore } from '../store/notes'
import { noteFilters, setType } from '../store/notesFilters'
import cn from '../utils/cn'

export default function NotesTypeFilters() {
	const notes = useStore(notesStore)
	const notesFilters = useStore(noteFilters)

	const filteredNotes = useMemo(
		() =>
			notes.filter(note => {
				const search = notesFilters.search.toLowerCase()
				const date = notesFilters.date

				return note.title.toLowerCase().includes(search) && (date === null || note.date === date)
			}),
		[notes, notesFilters]
	)

	const isActive = (type: string | null) => {
		return notesFilters.type === (type as keyof typeof NOTES_TYPES)
	}

	return (
		<>
			<li
				class={cn(
					'border border-gray-300 px-3 py-1 rounded-xl hover:shadow hover:[-webkit-text-stroke-width:0.2px] transition-all flex-nowrap',
					isActive(null) ? 'bg-black text-white' : 'bg-gray-100 text-black'
				)}
				onClick={() => setType(null)}
				onKeyDown={e => e.key === 'Enter' && setType(null)}
			>
				<button type='button' class='bg-transparent border-none text-nowrap'>
					Todas ({filteredNotes.length})
				</button>
			</li>
			{Object.entries(NOTES_TYPES).map(([key, value]) => (
				<li
					key={key}
					class={cn(
						'border border-gray-300 px-3 py-1 rounded-xl hover:shadow hover:[-webkit-text-stroke-width:0.2px] transition-all flex-nowrap',
						isActive(key) ? value.activeStyle : value.color
					)}
					onClick={() => setType(key as keyof typeof NOTES_TYPES)}
					onKeyDown={e => e.key === 'Enter' && setType(key as keyof typeof NOTES_TYPES)}
				>
					<button type='button' class='bg-transparent border-none text-nowrap'>
						{value.label} ({filteredNotes.filter(note => note.type === key).length})
					</button>
				</li>
			))}
		</>
	)
}
