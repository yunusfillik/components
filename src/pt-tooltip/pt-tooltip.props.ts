// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

import type {TooltipProps} from 'antd'

/**
 * Base tooltip props interface that extends TooltipProps from Ant Design.
 * This interface can be extended to add additional props specific to your application.
 */
export type PTTooltipPropsBase = TooltipProps & {
  /** Unique identifier for the tooltip. */
  id?: string
  /** Unique identifier for testing the tooltip. */
  testID?: string
}
