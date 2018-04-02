import React, { Component } from 'react'
import glamorous from 'glamorous'

import { Logo } from './Logo'
import { pagePadding, mediaQueries, style } from '../styles'

const mediaCollapseMenu = mediaQueries.phone

const Nav = glamorous.nav(props => ({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    zIndex: 1,
    background: style.colors.white,
    overflow: 'hidden',
    [mediaCollapseMenu]: {
        '&:before': {
            content: '""',
            position: 'absolute',
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            background: style.colors.black,
            opacity: props.showMobileNav ? 0.3 : 0,
            pointerEvents: props.showMobileNav ? 'none' : 'initial',
            transition: '0.2s',
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
        position: 'absolute',
        justifyContent: 'flex-start',
        background: style.colors.white,
        top: 0,
        right: 0,
        bottom: 0,
        left: '40%',
        transform: `translateX(${props.showMobileNav ? '0%' : '100%'})`
    }
}))

const MenuItem = glamorous.div({
    width: 100,
    textAlign: 'right',
    cursor: 'pointer',
    [mediaCollapseMenu]: {
        display: 'flex',
        width: '100%',
        zIndex: 2,
        padding: '10px 40px',
        justifyContent: 'center',
        '&:hover': {
            background: style.colors.lightGray,
        }
    }
})

const Humbugger = glamorous.div({
    selfJustify: 'flex-end',
    width: '100%',
    textAlign: 'right',
    display: 'none',
    [mediaCollapseMenu]: {
        display: 'block',
    }
})

export class Navigation extends Component {
    state = {
        showMobileNav: false,
    }

    toggleMenu = () => this.setState(state => ({ showMobileNav: !state.showMobileNav }), () => console.log('hhe'))

    render() {
        return (
            <Nav showMobileNav={this.state.showMobileNav}>
                <Logo />
                <Wrapper showMobileNav={this.state.showMobileNav}>
                    <MenuItem>O Firmie</MenuItem>
                    <MenuItem>Produkty</MenuItem>
                    <MenuItem>Kontakt</MenuItem>
                </Wrapper>
                <Humbugger onClick={this.toggleMenu}>Menu</Humbugger>
            </Nav>
        )
    }
}
