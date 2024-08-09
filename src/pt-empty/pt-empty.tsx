// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

/** @jsxImportSource @emotion/react */
import React from 'react'

import {Empty as AntdEmpty} from 'antd'

import {PTEmptyPropsBase} from './pt-empty.props'

/**
 * Custom empty component that extends Ant Design's Empty component.
 * Accepts additional props defined in PTEmptyPropsBase.
 */
const PTEmpty: React.FC<PTEmptyPropsBase> = ({...rest}) => {
  return <AntdEmpty {...{...rest}} />
}

export default React.memo(PTEmpty)
