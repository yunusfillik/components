// Copyright © 2024 ParamTech Inc. All rights reserved.
// See License for license information.

/** @jsxImportSource @emotion/react */
import {css} from '@emotion/react'

export const footerStyles = css`
  position: fixed;
  bottom: 0;
  z-index: 202;
  width: 85%;
  box-sizing: border-box;
  box-shadow: 0px 1.5px 4px -1px rgba(10, 9, 11, 0.07);
  background: var(--footer-bg-color) !important;
  border-top: 1px solid var(--pt-border-toc-color);
  color: var(--text-color) !important;
  padding-inline: 1.5rem;
  padding-block: 1.5rem;
`
