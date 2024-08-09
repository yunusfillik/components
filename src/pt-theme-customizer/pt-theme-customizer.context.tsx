// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

import React from 'react'

import {defaultThemeConfig} from './pt-theme-customizer.constant'
import {
  IThemeConfig,
  PTThemeCustomizerContext,
  ThemeCustomizerContextState,
  ThemeCustomizerProviderProps,
  initialState,
} from './pt-theme-customizer.props'
import {
  ContentDirection,
  ContentWidth,
  DensityMode,
} from '../pt-layout/content/content.types'
import {NavigationType} from '../pt-layout/navigation/navigation.props'
import Loader from '../pt-loader'
import {Products} from '../pt-theme/types'
import {ColorScheme} from '../pt-theme-provider/pt-theme-provider.props'
import {ThemeProviderService} from '../pt-theme-provider/pt-theme-provider.service'

class PTThemeCustomizerProvider extends React.Component<
  ThemeCustomizerProviderProps,
  ThemeCustomizerContextState
> {
  private selectedProduct: Products | null = null

  constructor(props: ThemeCustomizerProviderProps) {
    super(props)

    this.state = initialState
  }

  componentDidMount() {
    this.init()
    this.setHtmlThemeAttribute()
  }

  /**
   * Initializes the theme config by loading it from storage and saving the default config if no config is found.
   */
  init() {
    // Load the theme config from storage
    const config = ThemeProviderService.loadThemeConfig()

    if (!config) {
      ThemeProviderService.saveThemeConfig(defaultThemeConfig)
    }
  }

  /**
   * Updates a specific key in the theme config with the provided value,
   * updates the theme config in the ThemeProviderService, and performs necessary updates.
   *
   * @param key The key in the theme config to update.
   * @param value The value to set for the key.
   */
  updateThemeConfigByKeyValue = (key: keyof IThemeConfig, value: any) => {
    this.setState({loading: true}, () => {
      ThemeProviderService.updateThemeConfigByKeyValue(key, value)

      // After 3 seconds, update the themeConfig with the new value and stop loading
      setTimeout(() => {
        this.setState(
          (prevState) => ({
            themeConfig: {
              ...prevState.themeConfig,
              [key]: value,
            },
            loading: false,
          }),
          () => {
            window.location.reload()
          },
        )
      }, 3000)
    })
  }

  /**
   * Gets the current product from the ThemeProviderService.
   *
   * @returns The current product.
   */
  getProduct = () => {
    return ThemeProviderService.getProduct()
  }

  /**
   * Sets the selected product.
   *
   * @param product The product to set as selected.
   */
  setSelectedProduct = (product: Products) => {
    this.selectedProduct = product
  }

  /**
   * Sets the product, updates the selected product, and performs necessary updates.
   *
   * @param product The product to set.
   */
  setProduct = (product: Products) => {
    this.setSelectedProduct(product)

    this.setState({loading: true}, () => {
      ThemeProviderService.setProduct(product)

      setTimeout(() => {
        this.setState(
          (prevState) => ({
            themeConfig: {
              ...prevState.themeConfig,
              product: product,
            },
            loading: false,
          }),
          () => {
            window.location.reload()
          },
        )
      }, 3000)
    })
  }

  /**
   * Gets the current color scheme from the ThemeProviderService.
   *
   * @returns The current color scheme.
   */
  getColorScheme = () => {
    return ThemeProviderService.getColorScheme()
  }

  /**
   * Sets the color scheme, updates the color scheme in the theme config, and performs necessary updates.
   *
   * @param colorScheme The color scheme to set.
   */
  setColorScheme = (colorScheme: ColorScheme) => {
    this.setState({loading: true}, () => {
      ThemeProviderService.setColorScheme(colorScheme)

      this.setState(
        (prevState) => ({
          themeConfig: {
            ...prevState.themeConfig,
            colorScheme: colorScheme,
          },
          loading: false,
        }),
        () => {
          this.setHtmlThemeAttribute()
        },
      )
    })
  }

  /**
   * Sets the 'data-theme' attribute on the root HTML element to the current color scheme.
   */
  setHtmlThemeAttribute = () => {
    // Get the current color scheme from the ThemeProviderService
    const colorScheme = ThemeProviderService.getCurrentColorScheme()

    // Set the 'data-theme' attribute on the root HTML element
    const root = document.documentElement
    root.setAttribute('data-theme', colorScheme)
  }

  /**
   * Toggles the color scheme between 'light' and 'dark', updates the color scheme in the theme config, and performs necessary updates.
   */
  toggleColorScheme = () => {
    this.setState({loading: true}, () => {
      const newColorScheme: ColorScheme =
        this.state.themeConfig.colorScheme === 'light' ? 'dark' : 'light'

      ThemeProviderService.setColorScheme(newColorScheme)

      this.setState(
        (prevState) => ({
          themeConfig: {
            ...prevState.themeConfig,
            colorScheme: newColorScheme,
          },
          loading: false,
        }),
        () => {
          this.setHtmlThemeAttribute()
        },
      )
    })
  }

  /**
   * Gets the current density mode from the ThemeProviderService.
   *
   * @returns The current density mode.
   */
  getDensityMode = () => {
    return ThemeProviderService.getDensityMode()
  }

  /**
   * Sets the density mode, updates the density mode in the theme config, and performs necessary updates.
   *
   * @param densityMode The density mode to set.
   */
  setDensityMode = (densityMode: DensityMode) => {
    this.setState({loading: true}, () => {
      ThemeProviderService.setDensityMode(densityMode)

      this.setState((prevState) => ({
        themeConfig: {
          ...prevState.themeConfig,
          densityMode: densityMode,
        },
        loading: false,
      }))
    })
  }

  /**
   * Gets the current content direction from the ThemeProviderService.
   *
   * @returns The current content direction.
   */
  getContentDirection = () => {
    return ThemeProviderService.getContentDirection()
  }

  /**
   * Sets the content direction, updates the content direction in the theme config, and performs necessary updates.
   *
   * @param contentDirection The content direction to set.
   */
  setContentDirection = (contentDirection: ContentDirection) => {
    this.setState({loading: true}, () => {
      ThemeProviderService.setContentDirection(contentDirection)

      this.setState((prevState) => ({
        themeConfig: {
          ...prevState.themeConfig,
          contentDirection: contentDirection,
        },
        loading: false,
      }))
    })
  }

  /**
   * Gets the current content width from the ThemeProviderService.
   *
   * @returns The current content width.
   */
  getContentWidth = () => {
    return ThemeProviderService.getContentWidth()
  }

  /**
   * Sets the content width, updates the content width in the theme config, and performs necessary updates.
   *
   * @param contentWidth The content width to set.
   */
  setContentWidth = (
    contentWidth: ContentWidth,
    callback?: () => boolean,
  ): void => {
    this.setState({loading: true}, () => {
      ThemeProviderService.setContentWidth(contentWidth)

      this.setState(
        (prevState) => ({
          themeConfig: {
            ...prevState.themeConfig,
            contentWidth: contentWidth,
          },
          loading: false,
        }),
        () => callback?.(),
      )
    })
  }

  /**
   * Gets the current navigation type from the ThemeProviderService.
   *
   * @returns The current navigation type.
   */
  getNavigationType = () => {
    return ThemeProviderService.getNavigationType()
  }

  /**
   * Sets the navigation type, updates the navigation type in the theme config, and performs necessary updates.
   *
   * @param navigationType The navigation type to set.
   */
  setNavigationType = (navigationType: NavigationType) => {
    this.setState({loading: true}, () => {
      ThemeProviderService.setNavigationType(navigationType)

      this.setState((prevState) => ({
        themeConfig: {
          ...prevState.themeConfig,
          navigationType: navigationType,
        },
        loading: false,
      }))
    })
  }

  render() {
    const {loading} = this.state

    const _selectedProduct = this.selectedProduct
      ? this.selectedProduct.charAt(0).toUpperCase() +
        this.selectedProduct.slice(1)
      : ''

    return (
      <PTThemeCustomizerContext.Provider
        value={{
          themeConfig: this.state.themeConfig,
          loading: loading,
          updateThemeConfigByKeyValue: this.updateThemeConfigByKeyValue,
          getProduct: this.getProduct,
          setProduct: this.setProduct,
          getColorScheme: this.getColorScheme,
          setColorScheme: this.setColorScheme,
          toggleColorScheme: this.toggleColorScheme,
          getDensityMode: this.getDensityMode,
          setDensityMode: this.setDensityMode,
          getContentDirection: this.getContentDirection,
          setContentDirection: this.setContentDirection,
          getContentWidth: this.getContentWidth,
          setContentWidth: this.setContentWidth,
          getNavigationType: this.getNavigationType,
          setNavigationType: this.setNavigationType,
        }}
      >
        {this.props.children}
        {loading && (
          <Loader
            spinning={loading}
            loadingText={`${_selectedProduct} ayarları yükleniyor..`}
          />
        )}
      </PTThemeCustomizerContext.Provider>
    )
  }
}

export default PTThemeCustomizerProvider
export const PTThemeCustomizerConsumer = PTThemeCustomizerContext.Consumer

export const useThemeCustomizer = () => {
  const context = React.useContext(PTThemeCustomizerContext)
  if (!context) {
    throw new Error(
      'useThemeCustomizer must be used within a ThemeCustomizerProvider',
    )
  }
  return context
}
