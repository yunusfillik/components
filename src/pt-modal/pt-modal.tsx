// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

import React from 'react'

import {Modal as AntdModal} from 'antd'

import {PTModalPropsBase} from './pt-modal.props'

/**
 * Custom modal component that extends Ant Design's Modal component.
 * Accepts additional props defined in PTModalPropsBase.
 */
const PTModal: React.FC<PTModalPropsBase> = (props: PTModalPropsBase) => (
  <AntdModal {...props} />
)

export default React.memo(PTModal)
