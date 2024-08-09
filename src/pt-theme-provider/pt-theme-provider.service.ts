// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

import {ColorScheme} from './pt-theme-provider.props'
import {
  ContentDirection,
  ContentWidth,
  DensityMode,
} from '../pt-layout/content/content.types'
import {NavigationType} from '../pt-layout/navigation/navigation.props'
import {Products} from '../pt-theme/types'
import {defaultThemeConfig} from '../pt-theme-customizer/pt-theme-customizer.constant'
import {IThemeConfig} from '../pt-theme-customizer/pt-theme-customizer.props'

export class ThemeProviderService {
  private static themeConfig: IThemeConfig = defaultThemeConfig
  private static readonly STORAGE_KEY = 'theme'

  /**
   * Saves the theme configuration to localStorage.
   *
   * @param themeConfig The theme configuration to save.
   */
  public static saveThemeConfig(themeConfig: IThemeConfig) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(themeConfig))
  }

  /**
   * Loads the theme configuration from localStorage.
   *
   * @returns The loaded theme configuration, or the default theme configuration if not found.
   */
  public static loadThemeConfig(): IThemeConfig {
    const themeConfigString = localStorage.getItem(this.STORAGE_KEY)
    return themeConfigString
      ? JSON.parse(themeConfigString)
      : defaultThemeConfig
  }

  /**
   * Updates a specific key in the theme configuration with the provided value,
   * and saves the updated configuration to localStorage.
   *
   * @param key The key in the theme configuration to update.
   * @param value The value to set for the key.
   */
  public static updateThemeConfigByKeyValue(
    key: keyof IThemeConfig,
    value: any,
  ) {
    ThemeProviderService.themeConfig = {
      ...ThemeProviderService.themeConfig,
      [key]: value,
    }
    ThemeProviderService.saveThemeConfig(ThemeProviderService.themeConfig)
  }

  /**
   * Gets the currently selected product from the theme configuration.
   *
   * @returns The currently selected product.
   */
  public static getProduct(): Products {
    const themeConfig = this.loadThemeConfig()
    return themeConfig.product
  }

  /**
   * Sets the currently selected product in the theme configuration.
   *
   * @param product The product to set as currently selected.
   */
  public static setProduct(product: Products) {
    this.updateThemeConfigByKeyValue('product', product)
  }

  /**
   * Gets the current color scheme from the theme configuration.
   *
   * @returns The current color scheme.
   */
  public static getColorScheme(): ColorScheme {
    return this.themeConfig.colorScheme
  }

  /**
   * Gets the current color scheme from the loaded theme configuration.
   *
   * @returns The current color scheme.
   */
  public static getCurrentColorScheme(): ColorScheme {
    const themeConfig = this.loadThemeConfig()
    return themeConfig.colorScheme
  }

  /**
   * Sets the current color scheme in the theme configuration.
   *
   * @param colorScheme The color scheme to set.
   */
  public static setColorScheme(colorScheme: ColorScheme) {
    this.updateThemeConfigByKeyValue('colorScheme', colorScheme)
  }

  /**
   * Toggles between light and dark color schemes in the theme configuration.
   */
  public static toggleColorScheme() {
    const currentColorScheme = this.getColorScheme()
    const newColorScheme = currentColorScheme === 'light' ? 'dark' : 'light'
    this.setColorScheme(newColorScheme)
  }

  /**
   * Gets the current density mode from the theme configuration.
   *
   * @returns The current density mode.
   */
  public static getDensityMode(): DensityMode {
    const themeConfig = this.loadThemeConfig()
    return themeConfig.densityMode
  }

  /**
   * Sets the current density mode in the theme configuration.
   *
   * @param densityMode The density mode to set.
   */
  public static setDensityMode(densityMode: DensityMode) {
    this.updateThemeConfigByKeyValue('densityMode', densityMode)
  }

  /**
   * Gets the current content direction from the theme configuration.
   *
   * @returns The current content direction.
   */
  public static getContentDirection(): ContentDirection {
    const themeConfig = this.loadThemeConfig()
    return themeConfig.contentDirection
  }

  /**
   * Sets the current content direction in the theme configuration.
   *
   * @param contentDirection The content direction to set.
   */
  public static setContentDirection(contentDirection: ContentDirection) {
    this.updateThemeConfigByKeyValue('contentDirection', contentDirection)
  }

  /**
   * Gets the current content width from the theme configuration.
   *
   * @returns The current content width.
   */
  public static getContentWidth(): ContentWidth {
    const themeConfig = this.loadThemeConfig()
    return themeConfig.contentWidth
  }

  /**
   * Sets the current content width in the theme configuration.
   *
   * @param contentWidth The content width to set.
   */
  public static setContentWidth(contentWidth: ContentWidth) {
    this.updateThemeConfigByKeyValue('contentWidth', contentWidth)
  }

  /**
   * Gets the current navigation type from the theme configuration.
   *
   * @returns The current navigation type.
   */
  public static getNavigationType(): NavigationType {
    const themeConfig = this.loadThemeConfig()
    return themeConfig.navigationType
  }

  /**
   * Sets the current navigation type in the theme configuration.
   *
   * @param navigationType The navigation type to set.
   */
  public static setNavigationType(navigationType: NavigationType) {
    this.updateThemeConfigByKeyValue('navigationType', navigationType)
  }
}
