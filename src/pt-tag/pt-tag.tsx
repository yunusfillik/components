// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

/** @jsxImportSource @emotion/react */
import React from 'react'

import {Tag as AntTag} from 'antd'

import {PTTagPropsBase} from './pt-tag.props'

/**
 * Custom tag component that extends Ant Design's Tag component.
 * Accepts additional props defined in PTTagPropsBase.
 */
const PTTag: React.FC<PTTagPropsBase> = ({id, testID, ...rest}) => {
  return <AntTag {...rest} id={id} data-testid={testID} />
}

export default React.memo(PTTag)
