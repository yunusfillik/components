// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

/** @jsxImportSource @emotion/react */
import React from 'react'

import {Slider as AntSlider} from 'antd'

import {PTSliderPropsBase} from './pt-slider.props'

/**
 * Custom slider component that extends Ant Design's Slider component.
 * Accepts additional props defined in PTSliderPropsBase.
 */
const PTSlider: React.FC<PTSliderPropsBase> = ({id, testID, ...rest}) => {
  return <AntSlider {...rest} id={id} data-testid={testID} />
}

export default React.memo(PTSlider)
