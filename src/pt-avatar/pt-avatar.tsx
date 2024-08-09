// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

import React from 'react'

import {Avatar as AntAvatar} from 'antd'

import {PTAvatarPropsBase} from './pt-avatar.props'

/**
 * Custom avatar component that extends Ant Design's Avatar component.
 * Accepts additional props defined in PTAvatarPropsBase.
 */
const PTAvatar: React.FC<PTAvatarPropsBase> = (props: PTAvatarPropsBase) => (
  <AntAvatar {...props} />
)

export default PTAvatar
