// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

/** @jsxImportSource @emotion/react */
import React from 'react'

import {Skeleton as AntdSkeleton} from 'antd'

import {PTSkeletonPropsBase} from './pt-skeleton.props'

/**
 * Custom skeleton component that extends Ant Design's Skeleton component.
 * Accepts additional props defined in PTSkeletonPropsBase.
 */
const PTSkeleton: React.FC<PTSkeletonPropsBase> = ({...rest}) => {
  return <AntdSkeleton {...{...rest}} />
}

export default React.memo(PTSkeleton)
