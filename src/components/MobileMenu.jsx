import React from 'react'
import glamorous from 'glamorous'
import { Menu, Dropdown, Icon } from 'antd'

const MenuItem = glamorous(Menu.Item)({
    width: '100%'
})

const menu = (
    <Menu>
        <MenuItem key="0">
            <a href="http://www.alipay.com/">1st menu item</a>
        </MenuItem>
        <MenuItem key="1">
            <a href="http://www.taobao.com/">2nd menu item</a>
        </MenuItem>
        <MenuItem key="3">3rd menu item</MenuItem>
    </Menu>
);

export const MobileMenu = () =>
    <Dropdown overlay={menu} trigger={['click']}>
        <a className="ant-dropdown-link" href="#">
            Click me <Icon type="down" />
        </a>
    </Dropdown>