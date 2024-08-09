// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

import {css} from '@emotion/react'

import {Products} from '../pt-theme'

export const createCardStyles = (product?: Products) => {
  return css`
    .${product}-card {
      background: var(--footer-bg-color);
    }
  `
}
