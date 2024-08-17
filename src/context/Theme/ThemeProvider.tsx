'use client'

import { createContext, useCallback, useEffect, useState } from 'react'
import type { Theme, ThemeContextType, ThemeProviderProps } from './Theme.types'

export const ThemeContext = createContext<ThemeContextType | null>(null)

const THEME_VALUES: Array<Theme> = ['light', 'dark']

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [themeState, setThemeState] = useState<Theme | null>(null)

  const setTheme = useCallback((value: Theme) => {
    setThemeState(value)
  }, [])

  useEffect(() => {
    const storageValue = window.localStorage.getItem('theme')
    const isDark = document.body.classList.contains('dark')

    if (storageValue && THEME_VALUES.includes(storageValue as Theme)) {
      setTheme(storageValue as Theme)
      return
    }

    if (!storageValue && isDark) {
      setTheme('dark')
      window.localStorage.setItem('theme', 'dark')
      return
    }

    setTheme('light')
    window.localStorage.setItem('theme', 'light')
  }, [setTheme])

  useEffect(() => {
    document.body.classList.toggle('dark', themeState === 'dark')

    if (themeState) {
      window.localStorage.setItem('theme', themeState)
    }
  }, [themeState])

  return (
    <ThemeContext.Provider value={{ theme: themeState, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider