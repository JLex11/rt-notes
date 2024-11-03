export const NOTES_TYPES = {
  important: {
    label: 'Importantes',
    color: 'bg-red-100',
    activeStyle: 'bg-red-200 border-red-400 [-webkit-text-stroke-width:1px] hover:[-webkit-text-stroke-width:1px] text-red-950',
  },
  reminder: {
    label: 'Recordatorios',
    color: 'bg-green-100',
    activeStyle: 'bg-green-200 border-green-400 [-webkit-text-stroke-width:1px] hover:[-webkit-text-stroke-width:1px] text-green-950',
  },
  todo: {
    label: 'Tareas',
    color: 'bg-blue-200',
    activeStyle: 'bg-blue-300 border-blue-400 [-webkit-text-stroke-width:1px] hover:[-webkit-text-stroke-width:1px] text-blue-950',
  },
  others: {
    label: 'Otros',
    color: 'bg-gray-100',
    activeStyle: 'bg-gray-200 border-gray-400 [-webkit-text-stroke-width:1px] hover:[-webkit-text-stroke-width:1px] text-gray-950',
  },
}