// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

/** @jsxImportSource @emotion/react */
import React from 'react'

import {Button as AntButton} from 'antd'

import {PTButtonPropsBase, styles} from './pt-button.props'
import Icon from '../pt-icon'

/**
 * Custom button component that extends Ant Design's Button component.
 * Accepts additional props defined in PTButtonPropsBase.
 */
const PTButton: React.FC<PTButtonPropsBase> = ({
  id,
  testID,
  iconName,
  iconPosition = 'start',
  children,
  loadingText,
  ...rest
}) => {
  return (
    <AntButton
      {...rest}
      id={id}
      data-testid={testID}
      icon={iconName && iconPosition !== 'end' && <Icon name={iconName} />}
    >
      {!rest.loading && children}
      {iconPosition === 'end' && !rest.loading && (
        <Icon name={iconName} buttonStyles={styles} />
      )}
      {rest.loading && `${loadingText}..`}
    </AntButton>
  )
}

export default React.memo(PTButton)
