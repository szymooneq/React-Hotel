import { useCallback, useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

export const useTheme = () => {
  const [value, setValueState] = useState<Theme | null>(null)

  const setValue = useCallback((value: Theme) => setValueState(value), [])

  useEffect(() => {
    const storageValue = window.localStorage.getItem('theme')
    const isDark = document.body.classList.contains('dark')

    if (storageValue) {
      setValue(storageValue as Theme)
      return
    }

    if (!storageValue && isDark) {
      setValue('dark')
      window.localStorage.setItem('theme', 'dark')
      return
    }

    setValue('light')
    window.localStorage.setItem('theme', 'light')
  }, [setValue])

  useEffect(() => {
    document.body.classList.toggle('dark', value === 'dark')

    if (value) {
      window.localStorage.setItem('theme', value)
    }
  }, [value])

  return { value, setValue }
}