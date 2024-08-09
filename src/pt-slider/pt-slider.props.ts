// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

import type {SliderSingleProps} from 'antd'

/**
 * Base slider props interface that extends SliderSingleProps from Ant Design.
 * This interface can be extended to add additional props specific to your application.
 */
export interface PTSliderPropsBase extends SliderSingleProps {
  /** Unique identifier for the slider. */
  id?: string
  /** Unique identifier for testing the slider. */
  testID?: string
}
