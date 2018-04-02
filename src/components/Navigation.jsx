import React, { Component } from 'react'
import { HashLink as Link } from 'react-router-hash-link';
import { Icon } from 'antd'
import glamorous from 'glamorous'

import { Logo } from './Logo'
import { pagePadding, dynamicLayout, mediaQueries, style, removeLinkStyles } from '../styles'

const mediaCollapseMenu = mediaQueries.phone

const Nav = glamorous.nav(props => ({
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'baseline',
    zIndex: 1,
    background: style.colors.white,
    overflow: 'hidden',
    [mediaCollapseMenu]: {
        '&:before': {
            content: '""',
            position: 'fixed',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            background: style.colors.black,
            opacity: props.showMobileNav ? 0.3 : 0,
            pointerEvents: props.showMobileNav ? 'initial' : 'none',
            transition: '0.3s',
            zIndex: 5,
        }
    }
}), pagePadding)

const Wrapper = glamorous.div(props => ({
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    zIndex: 6,
    width: '100%',
    [mediaCollapseMenu]: {
        flexDirection: 'column',
        alignItems: 'flex-end',
        position: 'fixed',
        justifyContent: 'flex-start',
        background: style.colors.white,
        top: 0,
        right: 0,
        bottom: 0,
        paddingTop: 40,
        width: "50%",
        transform: `translateX(${props.showMobileNav ? '0%' : '100%'})`,
        transition: '0.3s',
    }
}))

const MenuItem = glamorous(Link)({
    width: 100,
    color: style.colors.black,
    textAlign: 'right',
    cursor: 'pointer',
    '&:hover': {
        color: style.colors.gold,
    },
    [mediaCollapseMenu]: {
        display: 'flex',
        width: '100%',
        zIndex: 2,
        padding: `10px ${dynamicLayout.phone.pagePadding}px`,
        justifyContent: 'flex-end',
        '&:hover': {
            background: style.colors.lightGray,
        }
    }
}, removeLinkStyles)

const Humbugger = glamorous.div({
    zIndex: 10,
    position: 'absolute',
    right: dynamicLayout.phone.pagePadding,
    top: 15,
    selfJustify: 'flex-end',
    width: '100%',
    textAlign: 'right',
    display: 'none',
    cursor: 'pointer',
    [mediaCollapseMenu]: {
        display: 'block',
    }
})

const menuItems = ['O firmie', 'Produkty', 'Kontakt']

const transformToHash = name => name.toLowerCase().replace(' ', '-')

export const menuHash = menuItems.map(transformToHash)
export class Navigation extends Component {
    state = {
        showMobileNav: false,
    }

    closeMenu = () => this.setState({ showMobileNav: false })

    toggleMenu = () => this.setState(state => ({ showMobileNav: !state.showMobileNav }))

    render() {
        return (
            <Nav showMobileNav={this.state.showMobileNav} >
                <Logo />
                <Wrapper showMobileNav={this.state.showMobileNav}>
                    {
                        menuItems.map(item => <MenuItem
                            key={item}
                            onClick={this.closeMenu}
                            smooth
                            to={`/#${transformToHash(item)}`}>{item}</MenuItem>)
                    }
                </Wrapper>
                <Humbugger>
                    <Icon
                        onClick={this.toggleMenu}
                        style={{ fontSize: 20 }}
                        type={this.state.showMobileNav ? 'menu-unfold' : 'menu-fold'} />
                </Humbugger>
            </Nav>
        )
    }
}
