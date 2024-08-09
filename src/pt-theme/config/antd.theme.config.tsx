// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

import {StyleDictionary, baseThemeTokens} from '@paramtechlab/tokens'
import {ThemeConfig, theme} from 'antd'

import {ColorScheme} from '../../pt-theme-provider/pt-theme-provider.props'
import {
  getColorPrimary,
  getColorText,
  getFontTypeFamilies,
} from '../foundations'
import {Products} from '../types/theme'

/**
 * Generates a theme configuration object for Ant Design based on the selected product, custom tokens, and color scheme.
 */
const setAntdThemeConfig = <T extends Products>(
  product?: T,
  customTokens?: Partial<ThemeConfig['token']>,
  colorScheme: ColorScheme = 'light',
) => {
  const {token: baseTokens, ...rest} = theme.useToken()

  const tokens: ThemeConfig['token'] | StyleDictionary.ColorPaletteDictionary =
    {
      ...baseTokens,
      colorText: getColorText(product),
      colorPrimary: getColorPrimary(product),
      colorPrimaryHover: getColorPrimary(product),
      colorPrimaryTextHover: getColorPrimary(product),
      colorPrimaryTextActive: getColorPrimary(product),
      colorLink: getColorPrimary(product),
      colorPrimaryBorder: getColorPrimary(product),
      colorPrimaryBorderHover: getColorPrimary(product),
      //colorBorderSecondary: getColorPrimary(product),
      fontSize: baseThemeTokens.fontSizeBodyM,
      fontFamily: getFontTypeFamilies(product).body,
      fontSizeHeading1: baseThemeTokens.fontSizeHeadingXL,
      fontSizeHeading2: baseThemeTokens.fontSizeHeadingL,
      fontSizeHeading3: baseThemeTokens.fontSizeBodyM,
      fontSizeHeading4: baseThemeTokens.fontSizeHeadingS,
      fontSizeHeading5: baseThemeTokens.fontSizeHeadingXS,
      fontSizeSM: baseThemeTokens.fontSizeBodyS,
      fontSizeLG: baseThemeTokens.fontSizeBodyL,
      fontSizeXL: baseThemeTokens.fontSizeBodyXL,
      controlItemBgActive: getColorPrimary(product),
      ...baseThemeTokens,
      ...customTokens,
      screenXSMax: 360,
      screenXSMin: 280,
      screenXS: 300,
      screenLG: 992,
      screenXL: 1200,
      screenXXL: 1600,
    }

  let algorithm

  if (colorScheme === 'dark') {
    algorithm = theme.darkAlgorithm
  }

  return {
    ...rest,
    token: tokens,
    algorithm,
  }
}

/**
 * Retrieves the Ant Design theme configuration for the specified product, custom tokens, and color scheme.
 * @throws Error if an invalid theme is provided.
 */
export const getAntdThemeConfig = <T extends Products>(
  product?: T,
  customTokens?: Partial<ThemeConfig['token']>,
  colorScheme: ColorScheme = 'light',
): ThemeConfig => {
  if (!product) {
    throw new Error(`Invalid theme: ${product}`)
  }
  return setAntdThemeConfig(product, customTokens, colorScheme)
}
