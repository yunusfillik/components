// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

import type {TypographyProps} from 'antd'

import {TypographyVariant} from './pt-typography.types'

/**
 * Base typography props interface that extends TypographyProps from Ant Design.
 * This interface can be extended to add additional props specific to your application.
 */
export interface PTTypographyPropsBase extends TypographyProps {
  /**
   * Specifies the type of typography component to render.
   * It determines which subcomponent of Ant Design's Typography to use.
   * Possible values are 'text', 'link', 'title', and 'paragraph'.
   */
  type: TypographyVariant

  /**
   * The content to be displayed within the typography component.
   * This can be any React node, such as text, elements, or components.
   */
  children?: React.ReactNode
}
