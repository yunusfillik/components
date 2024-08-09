// Copyright © 2024 ParamTech Inc. All rights reserved.
// See License for license information.

/** @jsxImportSource @emotion/react */
import React from 'react'

import {Row} from 'antd'

import ContentContainer from './content-container'
import {ContentPropsBase} from '../content.props'

const ContentBody: React.FC<ContentPropsBase> = () => {
  return (
    <Row>
      <ContentContainer />
    </Row>
  )
}

export default React.memo(ContentBody)
