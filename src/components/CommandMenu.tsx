import {
	CommandDialog,
	CommandEmpty,
	CommandGroup,
	CommandInput,
	CommandItem,
	CommandList,
	CommandSeparator,
} from 'cmdk'
import { useEffect, useState } from 'react'

export default function CommandMenu() {
	const [open, setOpen] = useState(true)

	useEffect(() => {
		const down = (e: Event) => {
			const event = e as KeyboardEvent
			if (event.key === 'k' && (event.metaKey || event.ctrlKey)) {
				event.preventDefault()
				setOpen(open => !open)
			}
		}

		document.addEventListener('keydown', down)													
		return () => document.removeEventListener('keydown', down)
	}, [])

	return (
		<CommandDialog
			open={open}
			onOpenChange={setOpen}
			label='Global Command Menu'
			className='fixed top-[25%] left-[50%] translate-x-[-50%] translate-y-[-25%] m-auto z-50 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-4 w-2xl flex flex-col'
		>
			<CommandInput
				className='w-full p-3 focus-within:outline-2 focus-within:outline-blue-400 rounded-lg bg-white/20 transition-all outline-transparent shadow-2xl'
				placeholder='Anything...'
			/>
			<CommandList>
				<CommandEmpty>No se obtuvieron resultados...</CommandEmpty>

				<CommandGroup heading='Letters' className='rounded-lg p-3 mt-4 bg-white shadow-inner border border-gray-100'>
					<CommandItem>a</CommandItem>
					<CommandItem>b</CommandItem>
					<CommandSeparator />
					<CommandItem>c</CommandItem>
				</CommandGroup>

				<CommandItem className='rounded-lg p-3 mt-4 bg-white shadow-inner'>Apple</CommandItem>
			</CommandList>
		</CommandDialog>
	)
}
