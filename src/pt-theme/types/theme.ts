// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

/**
 * Types representing different partners in the Kredim application.
 */
export type KredimPartners = 'kredim-business' | 'hopi'

/**
 * Types representing different modules in the Finrota application.
 */
export type FinrotaModules =
  | 'netekstre'
  | 'netahsilat'
  | 'dbs'
  | 'tos'
  | 'cek'
  | 'posrapor'
  | 'nap360'
  | 'finrota-admin'
  | 'finrota-common'

/**
 * Types representing different modules in the Univera application.
 */

export type UniveraModules = 'univera' | 'univis'

/**
 * Type representing products and modules within the application.
 */
export type Products =
  | 'param'
  | 'kredim'
  | 'kredim-merchant'
  | 'kredim-checkout'
  | 'backoffice'
  | 'finrota'
  | 'finrota-payment'
  | 'finrota-register'
  | KredimPartners
  | FinrotaModules
  | UniveraModules
  | 'paycore'
  | 'paramtech'

/**
 * Interface representing the theme configuration for a specific product or module.
 */
export interface ThemeConfig<T extends Products> {
  products: T
}
