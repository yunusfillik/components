// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

/** @jsxImportSource @emotion/react */
import React from 'react'

import {Col, Divider, Row, Tooltip, Typography, notification} from 'antd'

import {theming} from './pt-theme-customizer.constant'
import {useThemeCustomizer} from './pt-theme-customizer.context'
import {customizerItemStyles} from './pt-theme-customizer.styles'
import Button from '../pt-button/pt-button'
import Card from '../pt-card'
import Icon from '../pt-icon'
import {getColorPrimary} from '../pt-theme/foundations'

const PTThemeCustomizerRoot = () => {
  const {setColorScheme, setProduct, setNavigationType} = useThemeCustomizer()

  React.useEffect(() => {}, [])

  return (
    <>
      <Typography.Title level={5}>Theming</Typography.Title>
      <Typography.Title level={5}>Style Mode</Typography.Title>
      <Row gutter={10} justify="space-between" style={{marginBottom: '0.5em'}}>
        {theming.colorMode.map((themeOption) => (
          <Col key={themeOption.id} span={8}>
            <Card
              css={customizerItemStyles}
              onClick={() => {
                setColorScheme?.(themeOption.value)
                notification.success({
                  message: `Style Mode`,
                  description: `Changed to ${themeOption.value} mode.`,
                  placement: 'bottomLeft',
                })
              }}
            >
              <Icon name={themeOption.icon} />
            </Card>
            <Typography.Text>
              {`${themeOption.value.charAt(0).toUpperCase() + themeOption.value.slice(1)}`}
            </Typography.Text>
          </Col>
        ))}
      </Row>
      <Typography.Title level={5}>Product Colors</Typography.Title>
      <Row gutter={10} style={{marginBottom: '0.5em'}}>
        {theming.colors.map((colorOption) => (
          <Col key={colorOption.id} span={3}>
            <Tooltip
              title={
                colorOption.value.charAt(0).toUpperCase() +
                colorOption.value.slice(1)
              }
              placement="top"
            >
              <Button
                type="primary"
                style={{
                  backgroundColor: getColorPrimary(colorOption.value),
                  marginBottom: '0.5em',
                }}
                onClick={() => {
                  setProduct?.(colorOption.value)
                }}
              />
            </Tooltip>
          </Col>
        ))}
      </Row>
      <Divider />
      <Typography.Title level={5}>Layout</Typography.Title>
      <Typography.Title level={5}>Density</Typography.Title>
      <Row gutter={10} style={{marginBottom: '0.5em'}}>
        {theming.densityMode.map((densityOption) => (
          <Col key={densityOption.id} span={8}>
            <Card css={customizerItemStyles}>
              <densityOption.icon />
            </Card>
            <Typography.Text>
              {`${densityOption.value.charAt(0).toUpperCase() + densityOption.value.slice(1)}`}
            </Typography.Text>
          </Col>
        ))}
      </Row>
      <Typography.Title level={5}>Content</Typography.Title>
      <Row gutter={10} style={{marginBottom: '0.5em'}}>
        {theming.contentMode.map((contentOption) => (
          <Col key={contentOption.id} span={8}>
            <Card css={customizerItemStyles}>
              <contentOption.icon />
            </Card>
            <Typography.Text>
              {`${contentOption.value.charAt(0).toUpperCase() + contentOption.value.slice(1)}`}
            </Typography.Text>
          </Col>
        ))}
      </Row>
      <Typography.Title level={5}>Navigation</Typography.Title>
      <Row gutter={10}>
        {theming.navigationMode.map((navOption) => (
          <Col key={navOption.id} span={8}>
            <Card
              css={customizerItemStyles}
              onClick={() => {
                setNavigationType?.(navOption.value)
                notification.success({
                  message: `Navigation Mode`,
                  description: `Changed to ${navOption.value} mode.`,
                  placement: 'bottomLeft',
                })
              }}
            >
              <navOption.icon />
            </Card>
            <Typography.Text>
              {`${navOption.value.charAt(0).toUpperCase() + navOption.value.slice(1)}`}
            </Typography.Text>
          </Col>
        ))}
      </Row>
      <Divider />
    </>
  )
}

export default PTThemeCustomizerRoot
