// Copyright © 2024 ParamTech Inc. All rights reserved.
// See License for license information.

/** @jsxImportSource @emotion/react */
import React from 'react'

import {UserOutlined} from '@ant-design/icons'
import {Space, Typography} from 'antd'

import Avatar from '../../../../pt-avatar'

type ProfilePropsBase = {
  name?: string
}

const Profile: React.FC<ProfilePropsBase> = ({name}) => {
  return (
    <Space wrap size={8}>
      <Avatar icon={<UserOutlined />} />
      <Typography.Text>{name}</Typography.Text>
    </Space>
  )
}

export default Profile
