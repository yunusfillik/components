// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

/** @jsxImportSource @emotion/react */
import React from 'react'

import {Table as AntdTable} from 'antd'

import {PTDataTablePropsBase} from './pt-datatable.props'

/**
 * Custom datatable component that extends Ant Design's Table component.
 * Accepts additional props defined in PTDataTablePropsBase.
 */
const PTDataTable: React.FC<PTDataTablePropsBase> = ({id, testID, ...rest}) => {
  return <AntdTable {...rest} id={id} data-testid={testID} />
}

export default React.memo(PTDataTable)
