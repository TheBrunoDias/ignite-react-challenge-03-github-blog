import { useEffect, useState } from 'react'

export const useDebounce = (query: string, delay = 500) => {
  const [term, setTerm] = useState(query)

  useEffect(() => {
    const timeout = setTimeout(() => {
      setTerm(query)
    }, delay)

    return () => {
      clearTimeout(timeout)
    }
  }, [query, delay])

  return term
}
