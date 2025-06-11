import { useStore } from '@nanostores/react'
import { useMemo } from 'react'
import { NOTES_TYPES } from '../consts'
// import useScreenColumns from '../hooks/useScreenColumns'
import { notes as notesStore } from '../store/notes'
import { noteFilters } from '../store/notesFilters'
import cn from '../utils/cn'
// import { partitionByColumns } from '../utils/helpers'
import { normalizeText } from '../utils/normalizeText'
import { getRTF } from '../utils/rtf'

export default function NoteList() {
	const notes = useStore(notesStore)
	const notesFilters = useStore(noteFilters)
	// const columns = useScreenColumns({ initialColumns: 5 })

	const filteredNotesIds = useMemo(
		() =>
			notes
				.filter(note => {
					const search = normalizeText(notesFilters.search)
					const type = notesFilters.type
					const date = notesFilters.date

					const noteSearchable = normalizeText(note.title + note.content)

					return (
						noteSearchable.includes(search) &&
						(type === null || note.type === type) &&
						(date === null || note.date === date)
					)
				})
				.map(note => note.id),
		[notes, notesFilters]
	)

	const isFiltered = (noteId: number) => !filteredNotesIds.includes(noteId)

	// const NOTES_BY_COLUMN = useMemo(() => partitionByColumns(notes, columns), [notes, columns])

	const getNoteTypeColor = (type: string) => NOTES_TYPES[type as keyof typeof NOTES_TYPES]?.color

	return (
		<ul className='columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5'>
			{notes.map(note => (
				<li key={note.id} className='mb-4 break-inside-avoid'>
					<article
						className={cn(
							'flex flex-col p-4 rounded-2xl bg-gray-100 gap-4 shadow transition-all',
							getNoteTypeColor(note.type),
							isFiltered(note.id)
								? 'opacity-20 pointer-events-none select-none'
								: notesFilters.activeFilters && 'transform-gpu -translate-0.5'
						)}
					>
						<h2 className='font-bold'>{note.title}</h2>
						<p className='text-sm'>{note.content}</p>
						<footer>
							<small className='text-sm flex items-center gap-1'>
								<span className='select-none'>📅</span>
								<span className='opacity-75'>{getRTF(note.date)}</span>
							</small>
						</footer>
					</article>
				</li>
			))}
		</ul>
	)
}
