// ** React Imports
import { ReactNode } from 'react'

// ** MUI Imports
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles'
import { Settings } from '@/contexts/settingsContext'
// import themeConfigs from '@/configs/themeConfig'
import themeOptions from './ThemeOptions'
import { GlobalStyles } from '@mui/material'
import GlobalStyling from './globalStyles'



interface Props {
  settings: Settings
  children: ReactNode
}

const ThemeComponent = (props: Props) => {
  // ** Props
  const { settings, children } = props

  // ** Pass merged ThemeOptions (of core and user) to createTheme function
  const theme = createTheme(themeOptions(settings, 'light'))

  // ** Set responsive font sizes to true
//   if (themeConfigs.responsiveFontSizes) {
//     theme = responsiveFontSizes(theme)
//   }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={() => GlobalStyling(theme) as any} />
      {children}
    </ThemeProvider>
  )
}

export default ThemeComponent
