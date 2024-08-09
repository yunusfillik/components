// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

import {css} from '@emotion/react'

export const loaderStyles = css`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  display: flex;
  z-index: 1001;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  opacity: 1;
  visibility: visible;
  transition: all 0.2s;
  margin-top: 2rem;
`
