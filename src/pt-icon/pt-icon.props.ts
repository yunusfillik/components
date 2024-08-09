// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

import {css} from '@emotion/react'

import {ButtonIconPosition} from '../pt-button/pt-button.types'

/**
 * Base props interface for the Icon component.
 */
export interface PTIconPropsBase {
  /** The name of the icon to display. */
  name?: string | React.FC<React.SVGProps<SVGSVGElement>>
  /** The position of the icon within the button. */
  iconPosition?: ButtonIconPosition
  /** Custom styles for the icon. */
  buttonStyles?: ReturnType<typeof css>
}
