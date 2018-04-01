import React from 'react'
import { Link } from 'react-router-dom'
import glamorous from 'glamorous'
import PropsTypes from 'prop-types'
import tinycolor from 'tinycolor2'

import { style, mediaQueries } from '../styles'

const Wrapper = glamorous.div({
    background: tinycolor(style.colors.white).setAlpha(0.8).toRgbString(),
    width: 500,
    padding: 20,
    [mediaQueries.tablet]: {
        width: '100%',
    },
    [mediaQueries.phone]: {
        alignSelf: 'flex-end',
        marginBottom: 100,
    },
})

const Header = glamorous.h2({
    color: style.colors.black,
})

const CallToAction = glamorous(Link)({
    color: style.colors.gold
})

export const Card = ({ header, description, link }) => (
    <Wrapper>
        <Header>{header.toUpperCase()}</Header>
        <p>{description}</p>
        <CallToAction to={`/kategoria/${link}`}>Zobacz więcej</CallToAction>
    </Wrapper>
)

Card.propTypes = {
    header: PropsTypes.string.isRequired,
    description: PropsTypes.string.isRequired,
    link: PropsTypes.string.isRequired,
}