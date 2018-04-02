import React from 'react'
import glamorous from 'glamorous'

import { Logo } from './Logo'
import { pagePadding, mediaQueries } from '../styles'

const Nav = glamorous.nav({
    margin: '5px 0',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    zIndex: 1,
}, pagePadding)

const Wrapper = glamorous.div({
    flex: 1,
    display: 'flex',
    justifyContent: 'flex-end',
    [mediaQueries.phone]: {
        display: 'none',
    }
})

const MenuItem = glamorous.div({
    width: 100,
    textAlign: 'right',
    cursor: 'pointer',
})

export const Navigation = () => (
    <Nav>
        <Logo />
        <Wrapper>
            <MenuItem>O Firmie</MenuItem>
            <MenuItem>Produkty</MenuItem>
            <MenuItem>Kontakt</MenuItem>
        </Wrapper>
    </Nav>)
