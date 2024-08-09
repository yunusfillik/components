// Copyright © 2024 ParamTech Inc. All rights reserved.
// See License for license information.

import {MenuProps, SiderProps} from 'antd'

/**
 * Base interface for Navigation component props.
 * Extend this interface to add additional props.
 */
export interface NavigationPropsBase extends MenuProps {
  /**
   * Whether the Navigation is visible or not.
   */
  visible?: boolean
}

export interface NavigationSiderPropsBase extends SiderProps {
  children?: React.ReactNode
}

export interface NavigationSiderBarPropsBase extends SiderProps {
  /**
   * Whether the SiderBar is visible or not.
   */
  visible?: boolean
}

export type NavigationType = 'expanded' | 'collapsed'
