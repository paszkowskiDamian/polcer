import React from 'react'
import { Link } from 'react-router-dom'
import glamorous from 'glamorous'

import { style } from '../styles'

const Wrapper = glamorous.div({
    display: 'flex',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
})

const Header = glamorous.h1({
    fontSize: '3em',
})

const Message = glamorous.p({
    textAlign: 'center',
})

const GoBack = glamorous(Link)({
    color: style.colors.gold,
})

export const Page404 = () => (
    <Wrapper>
        <Header>404</Header>
        <Message>Niestety nie udało nam się znaleźć tego czego szukasz</Message>
        <GoBack to="/">Wróć do strony głównej</GoBack>
    </Wrapper>
)