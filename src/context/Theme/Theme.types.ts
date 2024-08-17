import type { ReactNode } from 'react'

export type Theme = 'light' | 'dark'

export interface ThemeProviderProps {
  children: ReactNode
}

export type ThemeContextType = {
  theme: Theme | null
  setTheme: (value: Theme) => void
}
