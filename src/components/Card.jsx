import React from 'react'
import { Link } from 'react-router-dom'
import glamorous from 'glamorous'
import PropTypes from 'prop-types'
import tinycolor from 'tinycolor2'

import { style, mediaQueries } from '../styles'

const Wrapper = glamorous.div(props => ({
    position: 'relative',
    bottom: props.willBeActive ? 0 : -100,
    opacity: props.willBeActive ? 1 : 0,
    transition: '1s ease-in-out',
    transitionDelay: props.willBeActive ? '0.5s' : 0,
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
}))

const Header = glamorous.h2({
    color: style.colors.black,
})

const CallToAction = glamorous(Link)({
    color: style.colors.gold
})

export const Card = ({ header, description, link, isActive, willBeActive }) => (
    <Wrapper isActive={isActive} willBeActive={willBeActive}>
        <Header>{header.toUpperCase()}</Header>
        <p>{description}</p>
        <CallToAction to={`/kategoria/${link}`}>Zobacz więcej</CallToAction>
    </Wrapper>
)

Card.propTypes = {
    header: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    willBeActive: PropTypes.bool.isRequired,
}