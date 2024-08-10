import { useEffect, useState } from 'react'

export const useMediaQuery = (query: string) => {
  const [isMatches, setIsMatches] = useState<boolean | undefined>(undefined)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const matchMedia = window.matchMedia(query)

      const onChange = () => {
        setIsMatches(matchMedia.matches)
      }

      onChange()

      matchMedia.addEventListener('change', onChange)

      return () => {
        matchMedia.removeEventListener('change', onChange)
      }
    }
  }, [query])

  return isMatches
}