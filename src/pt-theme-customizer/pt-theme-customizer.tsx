// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

/** @jsxImportSource @emotion/react */
import React from 'react'

import ThemeCustomizerRoot from './pt-theme-customizer.root'
import {iconStyles} from './pt-theme-customizer.styles'
import Button from '../pt-button'
import Drawer from '../pt-drawer/pt-drawer'

const PTThemeCustomizer = () => {
  const [open, setOpen] = React.useState(false)

  return (
    <>
      <Button
        type="primary"
        iconName="SettingOutlined"
        css={iconStyles}
        onClick={() => setOpen(true)}
      />

      <Drawer
        title="Template Customizer"
        onClose={() => setOpen(false)}
        open={open}
        width={400}
        closeIcon={false}
      >
        <ThemeCustomizerRoot />
      </Drawer>
    </>
  )
}

export default React.memo(PTThemeCustomizer)
