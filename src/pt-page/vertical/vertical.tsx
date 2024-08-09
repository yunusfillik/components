// Copyright © 2024 ParamTech Inc. All rights reserved.
// See License for license information.

/** @jsxImportSource @emotion/react */
import React from 'react'

import {Layout} from 'antd'

import {VerticalPropsBase, layoutBaseStyles} from './vertical.props'
import {PageContent} from '../../pt-layout'
import Navigation from '../../pt-layout/navigation/navigation'
import ThemeCustomizer from '../../pt-theme-customizer'
import Header from '../header/header'

const Vertical: React.FC<VerticalPropsBase> = () => {
  return (
    <>
      <Header />
      <Layout css={layoutBaseStyles}>
        <Navigation />
        <div style={{display: 'flex', flex: '1 0', width: '100%'}}>
          <PageContent />
        </div>
        <ThemeCustomizer />
      </Layout>
    </>
  )
}

export default React.memo(Vertical)
