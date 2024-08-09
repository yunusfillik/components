// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

import {NotificationArgsProps} from 'antd'

import {NotificationOptions} from './pt-notification.service'
import {NotificationType} from './pt-notification.types'

/**
 * Base notification props interface that extends NotificationArgsProps from Ant Design.
 * This interface can be extended to add additional props specific to your application.
 */
export interface PTNotificationPropsBase<T> extends NotificationArgsProps {
  type: NotificationType
  options: NotificationOptions
  data?: T
  children?: React.ReactNode
}
