// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

/** @jsxImportSource @emotion/react */
import React from 'react'

import {Drawer as AntdDrawer} from 'antd'

import {PTDrawerPropsBase} from './pt-drawer.props'
import {createDrawerStyles} from './pt-drawer.style'
import {useThemeCustomizer} from '../pt-theme-customizer'

/**
 * Custom drawer component that extends Ant Design's Drawer component.
 * Accepts additional props defined in PTDrawerPropsBase.
 */
const PTDrawer: React.FC<PTDrawerPropsBase> = ({...rest}) => {
  const {
    themeConfig: {product},
  } = useThemeCustomizer()

  return <AntdDrawer {...{...rest}} css={createDrawerStyles(product)} />
}

export default React.memo(PTDrawer)
