// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

/** @jsxImportSource @emotion/react */
import React from 'react'

import {Popover as AntdPopover} from 'antd'

import {PTPopoverPropsBase} from './pt-popover.props'

/**
 * Custom skeleton component that extends Ant Design's Popover component.
 * Accepts additional props defined in PTPopoverPropsBase.
 */
const PTPopover: React.FC<PTPopoverPropsBase> = ({...rest}) => {
  return <AntdPopover {...{...rest}} />
}

export default React.memo(PTPopover)
