import { useCallback, useEffect, useRef, useState } from "react"

interface ScreenColumnsConfig {
  [key: number]: number
}

interface UseScreenColumnsProps {
  initialColumns?: number
  breakpoints?: ScreenColumnsConfig
  debounceMs?: number
}

export default function useScreenColumns({ 
  initialColumns = 1,
  breakpoints = {
    640: 1,
    768: 2,
    1024: 3,
    1280: 4,
    1536: 5,
  },
  debounceMs = 150
}: UseScreenColumnsProps = {}) {
  const [columns, setColumns] = useState(initialColumns)
  const timeoutRef = useRef<NodeJS.Timeout>(undefined)

  const calculateColumns = useCallback((width: number): number => {
    const sortedBreakpoints = Object.entries(breakpoints)
      .map(([bp, cols]) => ({ breakpoint: Number(bp), columns: cols }))
      .sort((a, b) => a.breakpoint - b.breakpoint)

    for (const { breakpoint, columns: cols } of sortedBreakpoints) {
      if (width < breakpoint) {
        return cols
      }
    }

    return sortedBreakpoints[sortedBreakpoints.length - 1].columns
  }, [breakpoints])

  useEffect(() => {
    const handleResize = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }

      timeoutRef.current = setTimeout(() => {
        const newColumns = calculateColumns(window.innerWidth)
        setColumns(newColumns)
      }, debounceMs)
    }

    const initialCols = calculateColumns(window.innerWidth)
    setColumns(initialCols)

    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [calculateColumns, debounceMs])

  return columns
}
