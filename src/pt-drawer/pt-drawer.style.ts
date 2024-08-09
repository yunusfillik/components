// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

import {css} from '@emotion/react'

import {Products} from '../pt-theme'

export const createDrawerStyles = (product?: Products) => {
  return css`
    .${product}-drawer {
      .${product}-drawer-content {
        background: var(--bg-color);
      }

      .${product}-drawer-mask {
        background: rgba(255, 255, 255, 0);
      }
    }
  `
}
