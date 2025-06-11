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
	const [open, setOpen] = useState(false)

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
		<CommandDialog open={open} onOpenChange={setOpen} label='Global Command Menu'>
			<CommandInput />
			<CommandList>
				<CommandEmpty>No results found.</CommandEmpty>

				<CommandGroup heading='Letters'>
					<CommandItem>a</CommandItem>
					<CommandItem>b</CommandItem>
					<CommandSeparator />
					<CommandItem>c</CommandItem>
				</CommandGroup>

				<CommandItem>Apple</CommandItem>
			</CommandList>
		</CommandDialog>
	)
}
