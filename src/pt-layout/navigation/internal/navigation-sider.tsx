// Copyright © 2024 ParamTech Inc. All rights reserved.
// See License for license information.

/** @jsxImportSource @emotion/react */
import React from 'react'

import {Layout} from 'antd'

import {navigationSiderStyle} from './navigation-sider.style'
import {NavigationSiderPropsBase} from '../navigation.props'

const NavigationSider: React.FC<NavigationSiderPropsBase> = ({
  children,
  ...rest
}) => {
  return (
    <Layout.Sider
      css={navigationSiderStyle}
      {...rest}
      width={rest.width || 240}
    >
      {children}
    </Layout.Sider>
  )
}

export default React.memo(NavigationSider)
