// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

import type {RadioProps} from 'antd'

/**
 * Base radio props interface that extends RadioProps from Ant Design.
 * This interface can be extended to add additional props specific to your application.
 */
export interface PTRadioPropsBase extends RadioProps {
  /** Unique identifier for the radio. */
  id?: string
  /** Unique identifier for testing the radio. */
  testID?: string
}
