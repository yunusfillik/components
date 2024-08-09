// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

import type {SelectProps} from 'antd'

/**
 * Base select props interface that extends SelectProps from Ant Design.
 * This interface can be extended to add additional props specific to your application.
 */
export interface PTSelectPropsBase extends SelectProps {
  /** Unique identifier for the select. */
  id?: string
  /** Unique identifier for testing the select. */
  testID?: string
}
