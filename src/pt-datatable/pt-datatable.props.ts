// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

import type {TableProps} from 'antd'

/**
 * Base datatable props interface that extends TableProps from Ant Design.
 * This interface can be extended to add additional props specific to your application.
 */
export interface PTDataTablePropsBase extends TableProps {
  /** Unique identifier for the datatable. */
  id?: string
  /** Unique identifier for testing the datatable. */
  testID?: string
}
