// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

import type {DatePickerProps} from 'antd'

/**
 * Base datepicker props interface that extends DatePickerProps from Ant Design.
 * This interface can be extended to add additional props specific to your application.
 */
export interface PTDatepickerPropsBase extends DatePickerProps {
  /** Unique identifier for the datepicker. */
  id?: string
  /** Unique identifier for testing the datepicker. */
  testID?: string
}
