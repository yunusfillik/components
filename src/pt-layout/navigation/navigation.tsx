// Copyright © 2024 ParamTech Inc. All rights reserved.
// See License for license information.

/** @jsxImportSource @emotion/react */
import React, {useEffect, useState} from 'react'

import {Menu as AntdMenu} from 'antd'

import NavigationSider from './internal/navigation-sider'
import NavigationSiderBar from './internal/navigation-siderbar'
import {NavigationPropsBase} from './navigation.props'
import {useThemeCustomizer} from '../../pt-theme-customizer'

const Navigation: React.FC<NavigationPropsBase> = () => {
  const {themeConfig} = useThemeCustomizer()
  const {navigationType} = themeConfig
  const [isCollapsed, setIsCollapsed] = useState<boolean>(false)

  useEffect(() => {
    setIsCollapsed(navigationType === 'collapsed')
  }, [navigationType])

  return (
    <>
      <NavigationSiderBar visible={navigationType === 'expanded'} />
      <NavigationSider
        collapsible
        collapsed={isCollapsed}
        onCollapse={(collapsed) => {
          if (navigationType === 'expanded') {
            setIsCollapsed(collapsed)
          }
        }}
      >
        {/**
         * TODO:
         * Then create a comp for navigation type management as custom here.
         */}
        <AntdMenu />
      </NavigationSider>
    </>
  )
}

export default React.memo(Navigation)
