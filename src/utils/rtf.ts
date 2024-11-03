const rtf = new Intl.RelativeTimeFormat('es-ES', { numeric: 'auto' })

export const getRTF = (date: Date) => {
	const diff = date.getTime() - Date.now()
	const days = Math.floor(diff / (1000 * 60 * 60 * 24))

	if (days * -1 >= 365) return rtf.format(Math.ceil(days / 365), 'year')
	if (days * -1 >= 30) return rtf.format(Math.ceil(days / 30), 'month')
	if (days * -1 >= 7) return rtf.format(Math.ceil(days / 7), 'week')
	return rtf.format(days, 'day')
}
