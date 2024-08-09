// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

import {baseThemeTokens} from '@paramtechlab/tokens'

import {Products} from '../types/theme'

export const getColorText = <T extends Products>(
  product?: T,
): string | undefined => {
  switch (product) {
    case 'kredim-merchant':
    case 'backoffice':
    case 'param':
    case 'finrota':
    case 'finrota-payment':
    case 'finrota-register':
    case 'finrota-common':
    case 'finrota-admin':
    case 'cek':
    case 'dbs':
    case 'tos':
    case 'netahsilat':
    case 'posrapor':
    case 'netekstre':
    case 'nap360':
    case 'univera':
    case 'univis':
    case 'paycore':
    case 'paramtech':
      return baseThemeTokens.colorTextDefault?.light
    case 'kredim':
      return baseThemeTokens.colorPrimaryKredim?.light
    case 'kredim-business':
      return baseThemeTokens.colorPrimaryBusiness?.light
    case 'kredim-checkout':
      return baseThemeTokens.colorPrimaryCheckout?.light
    case 'hopi':
      return baseThemeTokens.colorPrimaryHopi?.light
    default:
      return baseThemeTokens.colorPrimaryParam?.light
  }
}

export const getColorPrimary = <T extends Products>(
  product?: T,
): string | undefined => {
  switch (product) {
    case 'finrota':
      return baseThemeTokens.colorPrimaryFinrota?.light
    case 'finrota-payment':
      return baseThemeTokens.colorPrimaryFinrota?.light
    case 'finrota-register':
      return baseThemeTokens.colorPrimaryFinrota?.light
    case 'cek':
      return baseThemeTokens.colorPrimaryCek?.light
    case 'dbs':
      return baseThemeTokens.colorPrimaryDbs?.light
    case 'tos':
      return baseThemeTokens.colorPrimaryTos?.light
    case 'netahsilat':
      return baseThemeTokens.colorPrimaryNetahsilat?.light
    case 'posrapor':
      return baseThemeTokens.colorPrimaryPosrapor?.light
    case 'netekstre':
      return baseThemeTokens.colorPrimaryNetekstre?.light
    case 'nap360':
      return baseThemeTokens.colorPrimaryNap360?.light
    case 'finrota-common':
      return baseThemeTokens.colorPrimaryFinrotaCommon?.light
    case 'finrota-admin':
      return baseThemeTokens.colorPrimaryFinrotaAdmin?.light
    case 'kredim':
      return baseThemeTokens.colorPrimaryKredim?.light
    case 'kredim-business':
      return baseThemeTokens.colorPrimaryBusiness?.light
    case 'kredim-merchant':
      return baseThemeTokens.colorPrimaryMerchant?.light
    case 'kredim-checkout':
      return baseThemeTokens.colorPrimaryCheckout?.light
    case 'hopi':
      return baseThemeTokens.colorPrimaryHopi?.light
    case 'backoffice':
      return baseThemeTokens.colorPrimaryBackoffice?.light
    case 'param':
      return baseThemeTokens.colorPrimaryParam?.light
    case 'univera':
      return baseThemeTokens.colorPrimaryUnivera?.light
    case 'univis':
      return baseThemeTokens.colorPrimaryUnivis?.light
    case 'paycore':
      return baseThemeTokens.colorPrimaryPaycore?.light
    case 'paramtech':
      return baseThemeTokens.colorPrimaryParamtech?.light
    default:
      return baseThemeTokens.colorPrimaryParam?.light
  }
}

export const getMenuItemSelectedColor = <T extends Products>(
  product?: T,
): string | undefined => {
  switch (product) {
    case 'finrota':
      return baseThemeTokens.colorPrimaryFinrota?.light
    case 'kredim':
      return baseThemeTokens.colorPrimaryKredim?.light
    case 'kredim-business':
      return baseThemeTokens.colorPrimaryBusiness?.light
    case 'hopi':
      return baseThemeTokens.colorPrimaryHopi?.light
    case 'backoffice':
    case 'param':
      return baseThemeTokens.colorPrimaryParam?.light
    default:
      return baseThemeTokens.colorPrimaryParam?.light
  }
}

export const getMenuItemColor = <T extends Products>(
  product?: T,
): string | undefined => {
  switch (product) {
    case 'kredim':
      return baseThemeTokens.colorPrimaryFinrota?.light
    case 'kredim-business':
      return baseThemeTokens.colorPrimaryBusiness?.light
    case 'hopi':
      return baseThemeTokens.colorPrimaryHopi?.light
    case 'backoffice':
    case 'param':
      return baseThemeTokens.colorPrimaryParam?.light
    default:
      return baseThemeTokens.colorPrimaryParam?.light
  }
}
