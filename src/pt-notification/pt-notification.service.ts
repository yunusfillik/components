import {notification} from 'antd'
import {NotificationPlacement} from 'antd/es/notification/interface'

export interface NotificationOptions {
  message: string
  description?: string
  duration?: number
  placement?: NotificationPlacement
}

// Function to show a generic notification
const showNotification = (
  type: 'success' | 'error' | 'info' | 'warning',
  options: NotificationOptions,
) => {
  notification[type]({
    message: options.message,
    description: options.description,
    duration: options.duration ?? 4.5,
    placement: options.placement ?? 'topRight',
  })
}

export const showSuccessNotification = (options: NotificationOptions) => {
  showNotification('success', options)
}

export const showErrorNotification = (options: NotificationOptions) => {
  showNotification('error', options)
}

export const showInfoNotification = (options: NotificationOptions) => {
  showNotification('info', options)
}

export const showWarningNotification = (options: NotificationOptions) => {
  showNotification('warning', options)
}
