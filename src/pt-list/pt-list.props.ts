// Copyright © 2024 ParamTech Labs Inc. All rights reserved.
// See License for license information.

import {ListProps} from 'antd'

/**
 * Base list props interface that extends ListProps from Ant Design.
 * This interface can be extended to add additional props specific to your application.
 */
export interface PTListPropsBase<T> extends ListProps<T> {}
