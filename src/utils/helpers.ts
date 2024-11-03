/**
 * Divide una lista en sublistas basadas en el número de columnas.
 * @param items - La lista de elementos a dividir.
 * @param columns - El número de columnas.
 * @returns Un array de objetos con columnId e items.
 */
export function partitionByColumns<T>(items: T[], columns: number): { columnId: number; items: T[] }[] {
	const result: { columnId: number; items: T[] }[] = Array.from({ length: columns }, (_, i) => ({
		columnId: i,
		items: [],
	}))

	items.forEach((item, index) => {
		result[index % columns].items.push(item)
	})

	return result
}
