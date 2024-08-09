// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

/** @jsxImportSource @emotion/react */
import React from 'react'

import {Card as AntdCard} from 'antd'

import {PTCardPropsBase} from './pt-card.props'
import {createCardStyles} from './pt-card.style'
import {useThemeCustomizer} from '../pt-theme-customizer'

/**
 * Custom card component that extends Ant Design's Card component.
 * Accepts additional props defined in PTCardPropsBase.
 */
const PTCard: React.FC<PTCardPropsBase> = (props: PTCardPropsBase) => {
  const {
    themeConfig: {product},
  } = useThemeCustomizer()

  return <AntdCard {...props} css={createCardStyles(product)} />
}

export default React.memo(PTCard)
