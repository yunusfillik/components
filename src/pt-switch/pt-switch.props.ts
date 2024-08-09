// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

import type {SwitchProps} from 'antd'

/**
 * Base switch props interface that extends SwitchProps from Ant Design.
 * This interface can be extended to add additional props specific to your application.
 */
export interface PTSwitchPropsBase extends SwitchProps {
  /** Unique identifier for the switch. */
  id?: string
  /** Unique identifier for testing the switch. */
  testID?: string
}
