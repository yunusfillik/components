// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

import React from 'react'

import {
  ContentDirection,
  ContentWidth,
  DensityMode,
} from '../pt-layout/content/content.types'
import {NavigationType} from '../pt-layout/navigation/navigation.props'
import {Products} from '../pt-theme/types'
import {ColorScheme} from '../pt-theme-provider/pt-theme-provider.props'
import {ThemeProviderService} from '../pt-theme-provider/pt-theme-provider.service'

/**
 * Interface representing the default theme configuration.
 */
export interface IThemeConfig {
  /** The product for which the default theme is configured. */
  product: Products
  /** The color scheme for the default theme. */
  colorScheme: ColorScheme
  /** The density mode for the application. */
  densityMode: DensityMode
  /** The content direction for the application. */
  contentDirection: ContentDirection
  /** The content width for the application. */
  contentWidth: ContentWidth
  /** The navigation type for the application. */
  navigationType: NavigationType
  /** The version of the application. */
  _version: string
}
export interface ThemeCustomizerProviderProps {
  children: React.ReactNode
}

export interface ThemeCustomizerContextState {
  /** The current theme configuration */
  themeConfig: IThemeConfig
  /** Indicates if the theme customizer is currently loading */
  loading: boolean
  /** Updates a specific key in the theme config with the provided value */
  updateThemeConfigByKeyValue?: (key: keyof IThemeConfig, value: any) => void
  /** Gets the currently selected product */
  getProduct?: () => Products
  /** Sets the currently selected product */
  setProduct?: (product: Products) => void
  /** Gets the current color scheme */
  getColorScheme?: () => ColorScheme
  /** Sets the current color scheme */
  setColorScheme?: (colorScheme: ColorScheme) => void
  /** Toggles between light and dark color schemes */
  toggleColorScheme?: () => void
  /** Gets the current density mode */
  getDensityMode?: () => DensityMode
  /** Sets the current density mode */
  setDensityMode?: (densityMode: DensityMode) => void
  /** Gets the current content direction */
  getContentDirection?: () => ContentDirection
  /** Sets the current content direction */
  setContentDirection?: (contentDirection: ContentDirection) => void
  /** Gets the current content width */
  getContentWidth?: () => ContentWidth
  /** Sets the current content width */
  setContentWidth?: (contentWidth: ContentWidth) => void
  /** Gets the current navigation type */
  getNavigationType?: () => NavigationType
  /** Sets the current navigation type */
  setNavigationType?: (navigationType: NavigationType) => void
}

const defaultThemeConfig = ThemeProviderService.loadThemeConfig()

export const PTThemeCustomizerContext =
  React.createContext<ThemeCustomizerContextState>({
    /** The default theme configuration */
    themeConfig: defaultThemeConfig,
    /** Indicates if the theme customizer is currently loading */
    loading: false,
    /** Updates a specific key in the theme config with the provided value */
    updateThemeConfigByKeyValue:
      ThemeProviderService.updateThemeConfigByKeyValue,
    /** Gets the currently selected product */
    getProduct: ThemeProviderService.getProduct,
    /** Sets the currently selected product */
    setProduct: ThemeProviderService.setProduct,
    /** Gets the current color scheme */
    getColorScheme: ThemeProviderService.getColorScheme,
    /** Sets the current color scheme */
    setColorScheme: ThemeProviderService.setColorScheme,
    /** Toggles between light and dark color schemes */
    toggleColorScheme: ThemeProviderService.toggleColorScheme,
    /** Gets the current density mode */
    getDensityMode: ThemeProviderService.getDensityMode,
    /** Sets the current density mode */
    setDensityMode: ThemeProviderService.setDensityMode,
    /** Gets the current content direction */
    getContentDirection: ThemeProviderService.getContentDirection,
    /** Sets the current content direction */
    setContentDirection: ThemeProviderService.setContentDirection,
    /** Gets the current content width */
    getContentWidth: ThemeProviderService.getContentWidth,
    /** Sets the current content width */
    setContentWidth: ThemeProviderService.setContentWidth,
    /** Gets the current navigation type */
    getNavigationType: ThemeProviderService.getNavigationType,
    /** Sets the current navigation type */
    setNavigationType: ThemeProviderService.setNavigationType,
  })

export const initialState: ThemeCustomizerContextState = {
  themeConfig: defaultThemeConfig,
  loading: false,
}

export interface ThemingProps {
  /** Array of color modes with id, value, and icon. */
  colorMode: Array<{
    id: number
    value: ColorScheme
    icon: string | React.FC<React.SVGProps<SVGSVGElement>>
  }>
  colors: Array<{
    id: number
    value: Products
  }>
  /** Array of density modes with id and value. */
  densityMode: Array<{
    id: number
    value: DensityMode
    icon: string | React.FC<React.SVGProps<SVGSVGElement>>
  }>
  /** Array of content modes with id and value. */
  contentMode: Array<{
    id: number
    value: ContentWidth
    icon: string | React.FC<React.SVGProps<SVGSVGElement>>
  }>
  /** Array of navigation modes with id and value. */
  navigationMode: Array<{
    id: number
    value: NavigationType
    icon: string | React.FC<React.SVGProps<SVGSVGElement>>
  }>
}
