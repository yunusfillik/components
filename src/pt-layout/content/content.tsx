// Copyright © 2024 ParamTech Inc. All rights reserved.
// See License for license information.

/** @jsxImportSource @emotion/react */
import React from 'react'
import {Outlet} from 'react-router-dom'

import {Layout} from 'antd'

import Footer from '../../pt-page/footer/footer'

const Content = () => {
  React.useEffect(() => {}, [])
  return (
    <Layout.Content>
      <Outlet />
      <Footer />
    </Layout.Content>
  )
}

export default Content
