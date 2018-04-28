import React from 'react'
import { Icon } from 'antd'
import glamorous from 'glamorous'

import { style } from '../styles'

const BadgeWrapper = glamorous.div({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    width: 70,
    height: 70,
    background: style.colors.lightGray,
    borderRadius: '50%',
})

export const Badge = ({ type }) => <BadgeWrapper>{type && <Icon type={type} style={{ fontSize: style.fonts.big }} />}</BadgeWrapper>