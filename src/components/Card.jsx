import React from 'react'
import { Link } from 'react-router-dom'
import glamorous from 'glamorous'
import PropTypes from 'prop-types'
import tinycolor from 'tinycolor2'

import { HeadLine } from './HeadLine'
import { style, mediaQueries } from '../styles'

const Wrapper = glamorous.div(props => ({
    position: 'relative',
    bottom: props.willBeActive ? 0 : -100,
    opacity: props.willBeActive ? 1 : 0,
    zIndex: props.isActive ? 1 : 0,
    transition: '1s ease-in-out',
    transitionDelay: props.willBeActive ? '0.8s' : 0,
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

const CallToAction = glamorous(Link)({
    cursor: 'pointer',
    color: style.colors.gold
})

export const Card = ({ header, description, link, isActive, willBeActive }) => (
    <Wrapper isActive={isActive} willBeActive={willBeActive}>
        <HeadLine>{header.toUpperCase()}</HeadLine>
        <p>{description}</p>
        {link && <CallToAction to={`/kategoria/${link}`}>Zobacz więcej</CallToAction>}
    </Wrapper>
)

Card.propTypes = {
    header: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isActive: PropTypes.bool.isRequired,
    willBeActive: PropTypes.bool.isRequired,
    link: PropTypes.string,
}