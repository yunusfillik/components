import React from 'react'

import {logos} from '../../../../icons'
import {Products, getLogo} from '../../../../pt-theme'

interface SelectedLogoProps {
  product: Products
  style?: React.CSSProperties
}

const SelectedLogo: React.FC<SelectedLogoProps> = ({product, style}) => {
  const LogoComponent = logos[getLogo(product)]

  if (!LogoComponent) {
    return null
  }

  return <LogoComponent style={style} />
}

export default SelectedLogo
