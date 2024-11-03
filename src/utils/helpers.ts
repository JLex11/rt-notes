/**
 * Divide una lista en sublistas basadas en el número de columnas.
 * @param items - La lista de elementos a dividir.
 * @param columns - El número de columnas.
 * @returns Un array de sublistas.
 */
export function partitionByColumns<T>(items: T[], columns: number): T[][] {
  const result: T[][] = Array.from({ length: columns }, () => [])

  items.forEach((item, index) => {
    result[index % columns].push(item)
  })

  return result
}