// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

import {IThemeConfig, ThemingProps} from './pt-theme-customizer.props'
import {BoxedIcon, CollapsedIcon, ExpandedIcon, FluidIcon} from '../icons/light'

export const theming: ThemingProps = {
  colorMode: [
    {
      id: 0,
      value: 'system',
      icon: 'LaptopOutlined',
    },
    {
      id: 1,
      value: 'light',
      icon: 'SunOutlined',
    },
    {
      id: 2,
      value: 'dark',
      icon: 'MoonOutlined',
    },
  ],
  colors: [
    {
      id: 0,
      value: 'paramtech',
    },
    {
      id: 1,
      value: 'param',
    },
    {
      id: 2,
      value: 'kredim',
    },
    {
      id: 3,
      value: 'kredim-business',
    },
    {
      id: 4,
      value: 'hopi',
    },
    {
      id: 5,
      value: 'finrota',
    },

    {
      id: 6,
      value: 'netahsilat',
    },
    {
      id: 7,
      value: 'nap360',
    },
    {
      id: 8,
      value: 'netekstre',
    },
    {
      id: 9,
      value: 'finrota-admin',
    },
    {
      id: 10,
      value: 'finrota-common',
    },
    {
      id: 11,
      value: 'dbs',
    },
    {
      id: 12,
      value: 'cek',
    },
    {
      id: 13,
      value: 'posrapor',
    },
    {
      id: 14,
      value: 'tos',
    },
    {
      id: 15,
      value: 'backoffice',
    },
    {
      id: 16,
      value: 'univera',
    },
    {
      id: 17,
      value: 'univis',
    },
    {
      id: 18,
      value: 'paycore',
    },
  ],
  densityMode: [
    {
      id: 0,
      value: 'comfortable',
      icon: FluidIcon,
    },
    {
      id: 1,
      value: 'compact',
      icon: BoxedIcon,
    },
  ],
  contentMode: [
    {
      id: 0,
      value: 'compact',
      icon: FluidIcon,
    },
    {
      id: 1,
      value: 'wide',
      icon: BoxedIcon,
    },
  ],
  navigationMode: [
    {
      id: 0,
      value: 'expanded',
      icon: ExpandedIcon,
    },
    {
      id: 1,
      value: 'collapsed',
      icon: CollapsedIcon,
    },
  ],
}

/**
 * Default theme configuration.
 */
export const defaultThemeConfig: IThemeConfig = {
  product: 'finrota',
  colorScheme: 'system',
  densityMode: 'comfortable',
  contentDirection: 'vertical',
  contentWidth: 'compact',
  navigationType: 'expanded',
  _version: '1.5.9',
}
