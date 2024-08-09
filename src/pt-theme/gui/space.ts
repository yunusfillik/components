// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

import {CSSObject} from '@emotion/react'
import log from 'loglevel'

export const createSpecificSpacing = (
  property: keyof CSSObject,
  value: string,
) => {
  const validProperties: Array<keyof CSSObject> = [
    'marginTop',
    'marginBottom',
    'marginLeft',
    'marginRight',
    'paddingTop',
    'paddingBottom',
    'paddingLeft',
    'paddingRight',
  ]

  if (!validProperties.includes(property)) {
    log.error(
      `Invalid property '${property}' provided to createSpecificSpacing fn.`,
    )
    return
  }

  const style: CSSObject = {
    [property]: value,
  }

  return style
}
