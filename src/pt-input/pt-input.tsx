// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

/** @jsxImportSource @emotion/react */
import React from 'react'

import {Input as AntInput} from 'antd'

import {PTInputPropsBase} from './pt-input.props'

/**
 * Custom input component that extends Ant Design's Input component.
 * Accepts additional props defined in PTInputPropsBase.
 */
const Input: React.FC<PTInputPropsBase> = ({id, testID, ...rest}) => {
  return <AntInput {...rest} id={id} data-testid={testID} />
}

export default React.memo(Input)
