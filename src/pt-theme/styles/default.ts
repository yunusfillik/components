// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

import {css} from '@emotion/react'

import {createCardStyles} from '../../pt-card/pt-card.style'
import {createDrawerStyles} from '../../pt-drawer/pt-drawer.style'
import {ThemeProviderService} from '../../pt-theme-provider/pt-theme-provider.service'
import {generateDefaultHeadingStyles, getFontTypeFamilies} from '../foundations'
import {Products} from '../types'

export const generateDefaultStyles = <T extends Products>(product?: T) => {
  const fontTypeFamilies = getFontTypeFamilies(product)
  const produtFromLS = ThemeProviderService.getProduct()

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

    ${generateDefaultHeadingStyles()}
    ${createDrawerStyles(produtFromLS)}
    ${createCardStyles(produtFromLS)}
  `
}
