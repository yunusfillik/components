// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

import {Products} from '../types'

export const getLogo = <T extends Products>(product: T): string => {
  switch (product) {
    case 'kredim':
      return 'KredimIcon'
    case 'kredim-business':
      return 'KredimBusinessIcon'
    case 'hopi':
      return 'HopiIcon'
    case 'finrota':
    case 'posrapor':
    case 'cek':
    case 'dbs':
    case 'finrota-admin':
    case 'finrota-common':
    case 'finrota-payment':
    case 'finrota-register':
    case 'nap360':
    case 'netahsilat':
    case 'netekstre':
    case 'tos':
      return 'FinrotaIcon'
    case 'param':
      return 'ParamIcon'
    case 'paramtech':
      return 'ParamTechIcon'
    case 'backoffice':
      return 'BackofficeIcon'
    case 'univera':
      return 'UniveraIcon'
    case 'univis':
      return 'UnivisIcon'
    case 'paycore':
      return 'PayCoreIcon'
    default:
      return 'ParamIcon'
  }
}
