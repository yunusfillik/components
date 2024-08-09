// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

import React from 'react'

import {ConfigProvider} from 'antd'

import {PTThemeProviderProps} from './pt-theme-provider.props'
import {ThemeProviderService} from './pt-theme-provider.service'
import {getAntdThemeConfig} from '../pt-theme/config'
import GlobalStyle from '../pt-theme/styles/GlobalStyle'
import {Products} from '../pt-theme/types'
import PTThemeCustomizerProvider, {
  useThemeCustomizer,
} from '../pt-theme-customizer/pt-theme-customizer.context'

const PTThemeProvider: React.FC<PTThemeProviderProps<Products>> = ({
  children,
  product: initialProduct = ThemeProviderService.getProduct(),
  customTokens,
  colorScheme: initialColorScheme = ThemeProviderService.getColorScheme() ||
    'light',
}: PTThemeProviderProps<Products>) => {
  const {updateThemeConfigByKeyValue} = useThemeCustomizer()
  const [product, ,] = React.useState(initialProduct)
  const [colorScheme, ,] = React.useState(initialColorScheme)

  React.useEffect(() => {
    updateThemeConfigByKeyValue?.('product', product)
  }, [product, updateThemeConfigByKeyValue])

  React.useEffect(() => {
    updateThemeConfigByKeyValue?.('colorScheme', colorScheme)
  }, [colorScheme, updateThemeConfigByKeyValue])

  const themeConfig = getAntdThemeConfig(product, customTokens, colorScheme)

  return (
    <PTThemeCustomizerProvider>
      <ConfigProvider
        key={`current_ ${product}`}
        prefixCls={product}
        iconPrefixCls={product}
        theme={themeConfig}
      >
        {product !== 'kredim' && <GlobalStyle product={product} />}
        {children}
      </ConfigProvider>
    </PTThemeCustomizerProvider>
  )
}

export default PTThemeProvider
