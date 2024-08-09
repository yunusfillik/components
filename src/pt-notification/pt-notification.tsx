// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

import React from 'react'

import {Button} from 'antd'

import {PTNotificationPropsBase} from './pt-notification.props'
import {
  showErrorNotification,
  showInfoNotification,
  showSuccessNotification,
  showWarningNotification,
} from './pt-notification.service'

/**
 * Custom notification component that extends Ant Design's Modal component.
 * Accepts additional props defined in PTNotificationPropsBase.
 */
const PTNotification = <T,>({
  type,
  options,
  data,
  children,
}: PTNotificationPropsBase<T>) => {
  const handleNotificationClick = () => {
    switch (type) {
      case 'success':
        showSuccessNotification(options)
        break
      case 'error':
        showErrorNotification(options)
        break
      case 'info':
        showInfoNotification(options)
        break
      case 'warning':
        showWarningNotification(options)
        break
      default:
        break
    }
  }

  return (
    <div>
      <Button onClick={handleNotificationClick}>
        {children || 'Show Notification'}
      </Button>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  )
}

export default React.memo(PTNotification)
