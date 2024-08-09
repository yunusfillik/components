// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

import type {TagProps} from 'antd'

/**
 * Base tag props interface that extends TagProps from Ant Design.
 * This interface can be extended to add additional props specific to your application.
 */
export interface PTTagPropsBase extends TagProps {
  /** Unique identifier for the tag. */
  id?: string
  /** Unique identifier for testing the tag. */
  testID?: string
}
