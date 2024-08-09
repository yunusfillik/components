// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

/** @jsxImportSource @emotion/react */
import React from 'react'

import {Typography as AntdTypography} from 'antd'

import {PTTypographyPropsBase} from './pt-typography.props'

/**
 * Custom typography component that extends Ant Design's Typography component.
 * Accepts additional props defined in PTTypographyPropsBase.
 */
const PTTypography: React.FC<PTTypographyPropsBase> = (props) => {
  const {type, children, ...rest} = props

  switch (type) {
    case 'text':
      return <AntdTypography.Text {...rest}>{children}</AntdTypography.Text>
    case 'link':
      return <AntdTypography.Link {...rest}>{children}</AntdTypography.Link>
    case 'title':
      return <AntdTypography.Title {...rest}>{children}</AntdTypography.Title>
    case 'paragraph':
      return (
        <AntdTypography.Paragraph {...rest}>
          {children}
        </AntdTypography.Paragraph>
      )
    default:
      return null // Or some fallback
  }
}

export default React.memo(PTTypography)
