// Copyright © 2024 ParamTech Inc. All rights reserved.
// See License for license information.

import {css} from '@emotion/react'

export interface VerticalPropsBase {
  visibleSider?: boolean
}

export const layoutBaseStyles = css`
  /** padding-block: 50px; */
  /** padding-inline: 50px; */
  background: var(--bg-color) !important;
  color: var(--text-color) !important;
  position: relative;
  overscroll-behavior: none !important;
  min-height: 0;
  display: flex;
  flex: 1 0 auto;
  flex-direction: column;
`
