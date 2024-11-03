import { useEffect, useState } from "preact/hooks"

export default function useScreenColumns({ initialColumns }: { initialColumns: number }) {
  const [columns, setColumns] = useState(initialColumns)

  const COLUMNS_BY_SCREEN_WIDTH = {
    640: 1,
    768: 2,
    1024: 3,
    1280: 4,
    1536: 5
  }

  useEffect(() => {
    const handleResize = () => {
      const currentScreenWidth = (Object.keys(COLUMNS_BY_SCREEN_WIDTH).find(key => window.innerWidth < Number(key)) || 1536) as keyof typeof COLUMNS_BY_SCREEN_WIDTH
      const COLUMNS = COLUMNS_BY_SCREEN_WIDTH[currentScreenWidth]
      setColumns(COLUMNS)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return columns
}