// Copyright © 2024 ParamTech Inc. All rights reserved.
// See License for license information.

import React from 'react'

import {Layout} from 'antd'

import {HorizontalPropsBase} from './horizontal.props'
import {PageContent} from '../../pt-layout'
import Navigation from '../../pt-layout/navigation/navigation'
import Header from '../header'

const Horizontal: React.FC<HorizontalPropsBase> = () => {
  return (
    <>
      <Header />
      <Navigation />
      <Layout>
        <PageContent />
      </Layout>
    </>
  )
}

export default Horizontal
