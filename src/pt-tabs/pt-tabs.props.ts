// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

import type {TabsProps} from 'antd'

/**
 * Base tab props interface that extends TabsProps from Ant Design.
 * This interface can be extended to add additional props specific to your application.
 */
export interface PTTabsPropsBase extends TabsProps {
  /** Unique identifier for the tab. */
  id?: string
  /** Unique identifier for testing the tab. */
  testID?: string
}
