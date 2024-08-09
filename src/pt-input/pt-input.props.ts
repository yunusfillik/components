// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

import type {InputProps} from 'antd'

/**
 * Base input props interface that extends InputProps from Ant Design.
 * This interface can be extended to add additional props specific to your application.
 */
export interface PTInputPropsBase extends InputProps {
  /** Unique identifier for the input. */
  id?: string
  /** Unique identifier for testing the input. */
  testID?: string
}
