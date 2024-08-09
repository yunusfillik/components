// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

/** @jsxImportSource @emotion/react */
import React from 'react'

import {Select as AntSelect} from 'antd'

import {PTSelectPropsBase} from './pt-select.props'

/**
 * Custom select component that extends Ant Design's Input component.
 * Accepts additional props defined in PTSelectPropsBase.
 */
const PTSelect: React.FC<PTSelectPropsBase> = ({id, testID, ...rest}) => {
  return <AntSelect {...rest} id={id} data-testid={testID} />
}

export default React.memo(PTSelect)
