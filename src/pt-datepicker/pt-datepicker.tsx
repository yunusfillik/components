// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

/** @jsxImportSource @emotion/react */
import React from 'react'

import {DatePicker as AntDatepicker} from 'antd'

import {PTDatepickerPropsBase} from './pt-datepicker.props'

/**
 * Custom datepicker component that extends Ant Design's DatePicker component.
 * Accepts additional props defined in PTDatepickerPropsBase.
 */
const PTDatePicker: React.FC<PTDatepickerPropsBase> = ({
  id,
  testID,
  ...rest
}) => {
  return <AntDatepicker {...rest} id={id} data-testid={testID} />
}

export default React.memo(PTDatePicker)
