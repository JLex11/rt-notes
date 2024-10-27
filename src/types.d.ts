export interface Note {
  id: number
  title: string
  content: string
  date: Date
  author: string
  type: default | important | todo | reminder
}