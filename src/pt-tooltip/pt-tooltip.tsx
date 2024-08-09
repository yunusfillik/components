// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

/** @jsxImportSource @emotion/react */
import React from 'react'

import {Tooltip as AntTooltip} from 'antd'

import {PTTooltipPropsBase} from './pt-tooltip.props'

/**
 * Custom tooltip component that extends Ant Design's Tooltip component.
 * Accepts additional props defined in PTTooltipPropsBase.
 */
const PTTooltip: React.FC<PTTooltipPropsBase> = ({id, testID, ...rest}) => {
  return <AntTooltip {...rest} id={id} data-testid={testID} />
}

export default React.memo(PTTooltip)
