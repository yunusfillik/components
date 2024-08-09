// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

/** @jsxImportSource @emotion/react */
import React from 'react'

import {Switch as AntSwitch} from 'antd'

import {PTSwitchPropsBase} from './pt-switch.props'

/**
 * Custom switch component that extends Ant Design's Switch component.
 * Accepts additional props defined in PTSwitchPropsBase.
 */
const PTSwitch: React.FC<PTSwitchPropsBase> = ({id, testID, ...rest}) => {
  return <AntSwitch {...rest} id={id} data-testid={testID} />
}

export default React.memo(PTSwitch)
