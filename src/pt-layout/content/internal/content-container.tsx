// Copyright © 2024 ParamTech Inc. All rights reserved.
// See License for license information.

/** @jsxImportSource @emotion/react */
import React from 'react'

import {Col, Row} from 'antd'

import {ContentPropsBase} from '../content.props'

const ContentContainer: React.FC<ContentPropsBase> = ({children}) => {
  return (
    <Row>
      <Col xs={24}>{children}</Col>
    </Row>
  )
}

export default React.memo(ContentContainer)
