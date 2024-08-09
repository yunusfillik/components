// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

/** @jsxImportSource @emotion/react */
import React from 'react'

import {Pagination as AntPagination} from 'antd'

import {PTPaginationPropsBase} from './pt-pagination.props'

/**
 * Custom pagination component that extends Ant Design's Input component.
 * Accepts additional props defined in PTPaginationPropsBase.
 */
const PTPagination: React.FC<PTPaginationPropsBase> = ({...rest}) => {
  return <AntPagination {...rest} />
}

export default React.memo(PTPagination)
