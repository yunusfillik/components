// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

/** @jsxImportSource @emotion/react */
import React from 'react'

import {Collapse as AntCollapse} from 'antd'

import {PTCollapsePropsBase} from './pt-collapse.props'

/**
 * Custom collapse component that extends Ant Design's Collapse component.
 * Accepts additional props defined in PTCollapsePropsBase.
 */
const PTCollapse: React.FC<PTCollapsePropsBase> = ({id, testID, ...rest}) => {
  return <AntCollapse {...rest} data-testid={testID} />
}

export default React.memo(PTCollapse)
