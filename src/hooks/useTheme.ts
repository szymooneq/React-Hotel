import { useContext } from 'react'
import { ThemeContext } from '@/context/Theme/ThemeProvider'

export const useTheme = () => {
  const context = useContext(ThemeContext)

  if (!context) {
    throw new Error('useTheme should be used insinde ThemeProvider')
  }

  return {
    ...context,
    isDarkTheme: context.theme === 'dark'
  }
}