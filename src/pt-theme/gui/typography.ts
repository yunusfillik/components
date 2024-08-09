// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

import {css} from '@emotion/react'
import {baseThemeTokens} from '@paramtechlab/tokens'
import type * as CSS from 'csstype'

import {Products} from '../types'

/**
 * -------------------------------------------------------------------------------------------------
 * [font definitions]
 * -------------------------------------------------------------------------------------------------
 */
export const generateFontSize = (value: CSS.Properties['fontSize']) => ({
  fontSize: value,
})

export const generateFontWeight = (value: CSS.Properties['fontWeight']) => ({
  fontWeight: value,
})

/**
 * -------------------------------------------------------------------------------------------------
 * [Text definitions]
 * -------------------------------------------------------------------------------------------------
 */
export const generateTextColor = (value: CSS.Properties['color']) => ({
  color: value,
})

export const generateTextPosition = (value: CSS.Properties['textAlign']) => ({
  textAlign: value,
})

export const generateTextTransform = (
  value: CSS.Properties['textTransform'],
) => ({
  textTransform: value,
})

/**
 * -------------------------------------------------------------------------------------------------
 * [Modular typography colors]
 * -------------------------------------------------------------------------------------------------
 */
//TODO: any yerine Products gelecek.
export const createTypography = (module?: Products) => {
  // default color
  let color = baseThemeTokens.colorPrimaryKredim?.light

  if (module === 'kredim-business') {
    color = baseThemeTokens.colorPrimaryBusiness?.light
  } else if (module === 'hopi') {
    color = baseThemeTokens.colorPrimaryHopi?.light
  } else if (module === 'finrota') {
    color = baseThemeTokens.colorPrimaryFinrota?.light
  } else if (module === 'backoffice') {
    color = baseThemeTokens.colorPrimaryBackoffice?.light
  } else if (module === 'param') {
    color = baseThemeTokens.colorPrimaryParam?.light
  }

  return css`
    a {
      color: ${color};
    }
  `
}
