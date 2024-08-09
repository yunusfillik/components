// Copyright © 2024 ParamTech Inc. All rights reserved.
// See License for license information.

/** @jsxImportSource @emotion/react */
import React from 'react'

import {Col, Layout, Row} from 'antd'

import {footerStyles} from './footer.style'

const Footer = () => {
  React.useEffect(() => {})
  return (
    <Layout.Footer css={footerStyles}>
      <Row justify="space-between">
        <Col span={12}>
          Copyright © 2024 ParamTech Inc. All rights reserved.
        </Col>
      </Row>
    </Layout.Footer>
  )
}

export default Footer
