// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

import {css} from '@emotion/react'
import {baseThemeTokens} from '@paramtechlab/tokens'

import {Products} from '../types/theme'

type FontTypes = 'heading' | 'body'

type FontSizes =
  | 25
  | 50
  | 75
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900
  | 1000
  | 1200

type HeadingElement = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

type HeadingDefinition = {
  size: number
}

type HeadingDefinitions = {
  [key in FontSizes]: HeadingDefinition
}

const HEADING_ELEMENTS: HeadingElement[] = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']

export const fontSize: HeadingDefinitions = {
  1200: {
    size: 66,
  },
  1000: {
    size: 40,
  },
  900: {
    size: 36,
  },
  800: {
    size: 32,
  },
  700: {
    size: 28,
  },
  600: {
    size: 25,
  },
  500: {
    size: 22,
  },
  400: {
    size: 20,
  },
  300: {
    size: 18,
  },
  200: {
    size: 16,
  },
  100: {
    size: 14,
  },
  75: {
    size: 12,
  },
  50: {
    size: 11,
  },
  25: {
    size: 10,
  },
}

const DEFAULT_HEADING_ELEMENT_SIZES: Record<HeadingElement, FontSizes> = {
  h1: 800,
  h2: 700,
  h3: 600,
  h4: 500,
  h5: 400,
  h6: 300,
}

export const getFontPrimary = <T extends Products>(product?: T): any => {
  switch (product) {
    case 'finrota':
      return baseThemeTokens.fontFamilyBaseFinrota
    case 'kredim':
    case 'kredim-business':
      return baseThemeTokens.fontFamilyBaseKredim
    case 'hopi':
      return baseThemeTokens.fontFamilyBaseHopi
    case 'backoffice':
      return baseThemeTokens.fontFamilyBase
    case 'param':
      return baseThemeTokens.fontFamilyBase
    default:
      return baseThemeTokens.fontFamilyBase
  }
}

export const generateDefaultHeadingStyles = () =>
  HEADING_ELEMENTS.map((headingElement: HeadingElement) => {
    const size = DEFAULT_HEADING_ELEMENT_SIZES[headingElement]

    return css`
      ${headingElement} {
        font-size: ${fontSize[size].size}px;
      }
    `
  })

export const getFontTypeFamilies = <T extends Products>(
  product?: T,
): Record<FontTypes, string> => {
  const fontPrimary = getFontPrimary(product)

  let heading = baseThemeTokens.fontFamilyBaseHeading

  if (product === 'hopi') {
    heading = baseThemeTokens.fontFamilyBaseHopi
  } else if (product === 'kredim') {
    heading = baseThemeTokens.fontFamilyBaseKredim
  }

  return {
    body: fontPrimary,
    heading: `${heading} !important`,
  }
}
