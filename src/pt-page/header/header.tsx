// Copyright © 2024 ParamTech Inc. All rights reserved.
// See License for license information.

/** @jsxImportSource @emotion/react */
import React, {useEffect} from 'react'

import {Layout as AntdLayout, Col, Row, Space} from 'antd'

import SelectedLogo from './components/logo'
import Profile from './components/profile'
import {headerStyles} from './header.style'
import Button from '../../pt-button/pt-button'
import Icon from '../../pt-icon'
import {useThemeCustomizer} from '../../pt-theme-customizer'

const Header: React.FC = () => {
  const {
    toggleColorScheme,
    themeConfig: {product, colorScheme},
  } = useThemeCustomizer()

  // Use useEffect hook only if you plan to perform some side-effects
  useEffect(() => {}, [])

  return (
    <AntdLayout.Header css={headerStyles}>
      <Row justify="space-between">
        <Col
          span={16}
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <SelectedLogo product={product} style={{maxWidth: '100px'}} />
        </Col>
        <Col
          span={8}
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <Space wrap size={24}>
            <Button type="text" onClick={toggleColorScheme}>
              <Icon
                name={colorScheme === 'light' ? 'SunOutlined' : 'MoonOutlined'}
              />
            </Button>
          </Space>
          <Profile name="Onur Pamuk" />
        </Col>
      </Row>
    </AntdLayout.Header>
  )
}

export default Header
