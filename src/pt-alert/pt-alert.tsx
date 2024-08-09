// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

import React from 'react'

import {Alert as AntAlert} from 'antd'

import {PTAlertPropsBase} from './pt-alert.props'

/**
 * Custom alert component that extends Ant Design's Alert component.
 * Accepts additional props defined in PTAlertPropsBase.
 */
const PTAlert: React.FC<PTAlertPropsBase> = (props: PTAlertPropsBase) => (
  <AntAlert {...props} />
)

export default PTAlert
