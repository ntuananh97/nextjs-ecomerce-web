import { Settings } from "@/contexts/settingsContext"
import { PaletteMode, ThemeOptions } from "@mui/material"
import { deepmerge } from "@mui/utils"
import palette from './palette'

const themeOptions = (settings: Settings, overrideMode: PaletteMode): ThemeOptions => {
    // ** Vars
    const { mode, themeColor, skin } = settings
  
    // ** Create New object before removing user component overrides and typography objects from userThemeOptions
    // const userThemeConfig: ThemeOptions = Object.assign({}, UserThemeOptions())
  
    const mergedThemeConfig: ThemeOptions = deepmerge(
      {
        // breakpoints: breakpoints(),
        // direction,
        // components: overrides(settings),
        // palette: {mode: mode === 'semi-dark' ? overrideMode : mode,
        //     theme: themeColor
        // },
        palette: palette(mode === 'semi-dark' ? overrideMode : mode, skin),

        // ...spacing,
        // shape: {
        //   borderRadius: 6
        // },
        // mixins: {
        //   toolbar: {
        //     minHeight: 64
        //   }
        // },
        // shadows: shadows(mode === 'semi-dark' ? overrideMode : mode),
        // typography
      },
      {}
    )
  
    return deepmerge(mergedThemeConfig, {
      palette: {
        primary: {
          ...(mergedThemeConfig.palette
            ? mergedThemeConfig.palette?.[themeColor]
            : palette(mode === 'semi-dark' ? overrideMode : mode, skin).primary)
        }
      }
    })
  }
  
  export default themeOptions