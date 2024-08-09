// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

import {ConfigProviderProps, ThemeConfig} from 'antd/es/config-provider'

import {Products} from '../pt-theme/types'

// Color scheme type for light and dark themes
export type ColorScheme = 'system' | 'light' | 'dark'

/**
 * Props for the ThemeProvider component.
 * Extends ConfigProviderProps from Ant Design.
 */
export interface PTThemeProviderProps<T extends Products>
  extends ConfigProviderProps {
  /** The product theme to apply. */
  product?: T
  /** The theme configuration. */
  theme?: ThemeConfig
  /** Custom tokens for the theme. */
  customTokens?: Partial<ThemeConfig['token']>
  /** The color scheme (light or dark). */
  colorScheme?: ColorScheme
  /** The children elements to be rendered within the theme provider. */
  children?: React.ReactNode
}
