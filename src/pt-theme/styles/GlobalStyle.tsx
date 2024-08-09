// Copyright © 2024 ParamTech Inc. All rights reserved.
// See License for license information.

import React, {memo} from 'react'

import {Global, css} from '@emotion/react'

import {createCardStyles} from '../../pt-card/pt-card.style'
import {createDrawerStyles} from '../../pt-drawer/pt-drawer.style'
import {
  generateDefaultHeadingStyles,
  getColorPrimary,
  getFontTypeFamilies,
} from '../foundations'
import {Products} from '../types'

type Props = {
  product?: Products
}
const GlobalStyle: React.FC<Props> = ({product}) => {
  const generateDefaultStyles = <T extends Products>(product?: T) => {
    const fontTypeFamilies = getFontTypeFamilies(product)

    return css`
      :root[data-theme='light'] {
        --bg-color: #fff;
        --text-color: #172b4d;
        --footer-bg-color: #fafbfc;
        --pt-border-toc-color: #dedede;
      }

      :root[data-theme='dark'] {
        --bg-color: #1d2125;
        --text-color: #b6c2cf;
        --footer-bg-color: #a1bdd914;
        --pt-border-toc-color: #444950;
      }

      :root[data-theme='system'] {
        --bg-color: #fff;
        --text-color: #172b4d;
        --footer-bg-color: #fafbfc;
        --pt-border-toc-color: #dedede;
      }

      body {
        background: var(--bg-color) !important;
        color: var(--text-color) !important;
        height: 100%;
        overscroll-behavior: none !important;
      }

      #root {
        display: flex;
        flex-direction: column;
        min-height: 100%;
        width: 100%;
      }

      // load default heading & body fonts
      font-family: ${fontTypeFamilies.body};

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        // set heading type styles
        font-family: ${fontTypeFamilies.heading};
        color: var(--text-color) !important;
      }

      .${product}-divider {
        border-block-start: 1px solid ${getColorPrimary(product)};
      }

      .${product}-layout-sider-trigger {
        /**bottom: 65px !important;*/
        background: var(--bg-color) !important;
        color: var(--text-color) !important;
        border-inline-end: 1px solid var(--pt-border-toc-color);
      }

      ${generateDefaultHeadingStyles()}
      ${createDrawerStyles(product)}
      ${createCardStyles(product)}
    `
  }

  return <Global styles={generateDefaultStyles(product)} />
}

export default memo(GlobalStyle)
