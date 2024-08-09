// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

import React from 'react'

import {Spin as AntdSpin} from 'antd'

import {PTSpinPropsBase} from './pt-spin.props'

/**
 * Custom spin component that extends Ant Design's Spin component.
 * Accepts additional props defined in PTSpinPropsBase.
 */
const PTSpin: React.FC<PTSpinPropsBase> = (props: PTSpinPropsBase) => (
  <AntdSpin {...props} />
)

export default React.memo(PTSpin)
