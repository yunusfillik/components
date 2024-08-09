// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

/** @jsxImportSource @emotion/react */
import React from 'react'

import {List as AntdList} from 'antd'

import {PTListPropsBase} from './pt-list.props'

/**
 * Custom list component that extends Ant Design's List component.
 * Accepts additional props defined in PTListPropsBase.
 */
const PTList = <T,>({...rest}: PTListPropsBase<T>) => {
  return <AntdList {...rest} />
}

export default React.memo(PTList)
