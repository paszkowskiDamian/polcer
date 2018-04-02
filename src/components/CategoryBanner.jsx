import React from 'react'
import PropTypes from 'prop-types'
import glamorous from 'glamorous'

import { style, pagePadding } from '../styles'

const Wrapper = glamorous.div({
    height: 200,
    background: style.colors.lightGray,
    display: 'flex',
    alignItems: 'center',
}, pagePadding)

const Header = glamorous.h1({
    letterSpacing: '3px'
})

export const CategoryBanner = ({ name }) => (
    <Wrapper>
        <Header>{name}</Header>
    </Wrapper>
)

CategoryBanner.propTypes = {
    name: PropTypes.string.isRequired
}