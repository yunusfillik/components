// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

import React from 'react'

import {Badge as AntBadge} from 'antd'

import {PTBadgePropsBase} from './pt-badge.props'

/**
 * Custom badge component that extends Ant Design's Badge component.
 * Accepts additional props defined in PTBadgePropsBase.
 */
const PTBadge: React.FC<PTBadgePropsBase> = (props: PTBadgePropsBase) => (
  <AntBadge {...props} />
)

export default PTBadge
