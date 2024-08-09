// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

import type {CollapseProps} from 'antd'

/**
 * Base collapse props interface that extends CollapseProps from Ant Design.
 * This interface can be extended to add additional props specific to your application.
 */
export interface PTCollapsePropsBase extends CollapseProps {
  /** Unique identifier for the collapse. */
  id?: string
  /** Unique identifier for testing the collapse. */
  testID?: string
}
