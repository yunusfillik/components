// Copyright © 2024 ParamTech Inc. All rights reserved.
// See License for license information.

/** @jsxImportSource @emotion/react */
import React from 'react'

import NavigationSider from './navigation-sider'
import {NavigationSiderBarPropsBase} from '../navigation.props'

const NavigationSiderBar: React.FC<NavigationSiderBarPropsBase> = ({
  visible,
}) => {
  return (
    <>
      {visible && (
        <NavigationSider
          collapsed={true}
          collapsedWidth={56}
          collapsible={false}
        />
      )}
    </>
  )
}

export default NavigationSiderBar
