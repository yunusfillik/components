// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

/** @jsxImportSource @emotion/react */
import React from 'react'

import {LoadingOutlined} from '@ant-design/icons'
import {Spin as AntdSpin, Typography} from 'antd'

import {PTLoaderPropsBase} from './pt-loader.props'
import {loaderStyles} from './pt-loader.style'
import {getColorPrimary} from '../pt-theme'
import {useThemeCustomizer} from '../pt-theme-customizer'

/**
 * Custom loader component that extends Ant Design's Spin component.
 * Accepts additional props defined in PTLoaderPropsBase.
 */
const PTLoader: React.FC<PTLoaderPropsBase> = ({loadingText, ...rest}) => {
  const {
    themeConfig: {product},
  } = useThemeCustomizer()

  return (
    <>
      <AntdSpin
        {...rest}
        style={{
          color: getColorPrimary(product),
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
        }}
        indicator={<LoadingOutlined />}
        fullscreen
      />
      {rest.spinning && (
        <Typography.Text css={loaderStyles}>{loadingText}</Typography.Text>
      )}
    </>
  )
}

export default PTLoader
