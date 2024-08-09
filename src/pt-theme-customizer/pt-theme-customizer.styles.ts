// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

import {css, keyframes} from '@emotion/react'

const rotating = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const iconStyles = css`
  position: fixed;
  right: 0px;
  top: 50%;
  width: 38px;
  height: 38px;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  box-shadow: 0 10px 30px 0 hsl(0deg 0% 60% / 20%);
  z-index: 999;
  justify-content: center;
  cursor: pointer;

  span {
    height: 100%;
    justify-content: center;
    display: flex;
    align-items: center;

    svg {
      width: 16px;
      height: 16px;
      animation: ${rotating} 1.5s linear infinite;
      color: #fff;
    }
  }
`

export const customizerItemStyles = css`
  border-width: 2px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  max-height: 72px;
  margin-bottom: 5px;
`
