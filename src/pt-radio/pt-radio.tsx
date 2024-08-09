// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

/** @jsxImportSource @emotion/react */
import React from 'react'

import {Radio as AntRadio} from 'antd'

import {PTRadioPropsBase} from './pt-radio.props'

/**
 * Custom radio component that extends Ant Design's Input component.
 * Accepts additional props defined in PTRadioPropsBase.
 */
const PTRadio: React.FC<PTRadioPropsBase> = ({id, testID, ...rest}) => {
  return <AntRadio {...rest} id={id} data-testid={testID} />
}

export default React.memo(PTRadio)
