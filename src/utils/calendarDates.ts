interface GenerateDates {
  startDate?: Date
  daysCount?: number
}

let lastGeneratedDate: Date = new Date()

export function generateDates({ startDate = new Date(), daysCount = 7 }: GenerateDates = {}) {
  const days = [
    'Domingo', 'Lunes', 'Martes', 'Miércoles',
    'Jueves', 'Viernes', 'Sábado'
  ]

  const months = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ]

  const dates = Array.from({ length: daysCount }, (_, index) => {
    const currentDate = new Date(startDate)
    currentDate.setDate(startDate.getDate() + index)

    return {
      day: days[currentDate.getDay()],
      date: currentDate.getDate(),
      month: months[currentDate.getMonth()],
      active: index === 0
    }
  })

  lastGeneratedDate = new Date(startDate)
  lastGeneratedDate.setDate(startDate.getDate() + daysCount)

  return dates
}

export function generateMoreDates(daysCount?: number) {
  return generateDates({ startDate: lastGeneratedDate, daysCount })
}