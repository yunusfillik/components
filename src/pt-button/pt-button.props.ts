// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

import {css} from '@emotion/react'
import type {ButtonProps} from 'antd/es/button/button'

import {ButtonIconPosition} from './pt-button.types'

/**
 * Base button props interface that extends ButtonProps from Ant Design.
 * This interface can be extended to add additional props specific to your application.
 */
export interface PTButtonPropsBase extends ButtonProps {
  /** Unique identifier for the button. */
  id?: string
  /** Determines if the button should display an animation effect. */
  animated?: boolean
  /** Unique identifier for testing the button. */
  testID?: string
  /** Text to display when the button is in a loading state. */
  loadingText?: string
  /** Name of the icon to display within the button. */
  iconName?: string
  /** Specifies the position of the icon within the button. */
  iconPosition?: ButtonIconPosition
}

export const styles = css`
  margin-inline-start: 8px;
`
