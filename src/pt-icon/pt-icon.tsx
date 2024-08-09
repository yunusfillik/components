// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

/** @jsxImportSource @emotion/react */
import React from 'react'

import * as Icons from '@ant-design/icons'
import {css} from '@emotion/react'

import {PTIconPropsBase} from './pt-icon.props'
import {useThemeCustomizer} from '../pt-theme-customizer'
import {ColorScheme} from '../pt-theme-provider/pt-theme-provider.props'

const styles = css`
  /* Icon styles */
`

export const getIcon = (
  iconName?: string,
  colorScheme?: ColorScheme,
): string => {
  const themeFolder = colorScheme ? 'dark' : 'light'
  return `${themeFolder}/${iconName}.svg`
}

/**
 * Custom icon component that extends Ant Design's.
 * Accepts additional props defined in PTIconPropsBase.
 */
const PTIcon: React.FC<PTIconPropsBase> = ({
  name,
  iconPosition,
  buttonStyles,
}) => {
  const {
    themeConfig: {product},
  } = useThemeCustomizer()

  // Type guard to check if the name is a string
  const isString = (value: unknown): value is string => {
    return typeof value === 'string'
  }

  if (isString(name)) {
    const IconComponent = (Icons as any)[name]

    if (IconComponent) {
      return (
        <span
          css={[iconPosition === 'end' && styles, buttonStyles]}
          className={`${product}-btn-icon`}
        >
          <IconComponent />
        </span>
      )
    }
  } else if (name) {
    // If name is a React component
    const IconComponent = name

    return (
      <span
        css={[iconPosition === 'end' && styles, buttonStyles]}
        className={`${product}-btn-icon`}
      >
        <IconComponent />
      </span>
    )
  }

  return null
}

export default PTIcon
