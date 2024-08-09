// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

import type {CheckboxProps} from 'antd'

/**
 * Base checkbox props interface that extends CheckboxProps from Ant Design.
 * This interface can be extended to add additional props specific to your application.
 */
export interface PTCheckboxPropsBase extends CheckboxProps {
  /** Unique identifier for the checkbox. */
  id?: string
  /** Unique identifier for testing the checkbox. */
  testID?: string
}
