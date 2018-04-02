import React from 'react'
import glamorous from 'glamorous'

import { HeaderLine } from './HeadLine'
import { style, pagePadding } from '../styles'

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
})

const Logo = glamorous(HeaderLine)({

})

const MenuItem = glamorous.div({
    width: 100,
    textAlign: 'right',
    cursor: 'pointer',
})

export const Navigation = () => (
    <Nav>
        <Logo>POLCER</Logo>
        <Wrapper>
            <MenuItem>O Firmie</MenuItem>
            <MenuItem>Produkty</MenuItem>
            <MenuItem>Kontakt</MenuItem>
        </Wrapper>
    </Nav>)
