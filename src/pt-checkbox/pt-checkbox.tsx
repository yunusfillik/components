// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

/** @jsxImportSource @emotion/react */
import React from 'react'

import {Checkbox as AntCheckbox} from 'antd'

import {PTCheckboxPropsBase} from './pt-checkbox.props'

/**
 * Custom checkbox component that extends Ant Design's Input component.
 * Accepts additional props defined in PTCheckboxPropsBase.
 */
const PTCheckbox: React.FC<PTCheckboxPropsBase> = ({id, testID, ...rest}) => {
  return <AntCheckbox {...rest} id={id} data-testid={testID} />
}

export default React.memo(PTCheckbox)
