// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

/** @jsxImportSource @emotion/react */
import React from 'react'

import {Tabs as AntTabs} from 'antd'

import {PTTabsPropsBase} from './pt-tabs.props'

/**
 * Custom tab component that extends Ant Design's Tabs component.
 * Accepts additional props defined in PTTabsPropsBase.
 */
const PTTabs: React.FC<PTTabsPropsBase> = ({id, testID, ...rest}) => {
  return <AntTabs {...rest} id={id} data-testid={testID} />
}

export default React.memo(PTTabs)
