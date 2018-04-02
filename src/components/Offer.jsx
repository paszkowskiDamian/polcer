import React from 'react'
import PropTypes from 'prop-types'
import glamorous from 'glamorous'

import { style, mediaQueries } from '../styles'

const Wrapper = glamorous.div({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0 15px',
    '&:first-child': {
        paddingLeft: 0,
    },
    '&:last-child': {
        paddingRight: 0,
    },
    [mediaQueries.phone]: {
        padding: 0,
    }
})

const Badge = glamorous.div({
    margin: 20,
    width: 50,
    height: 50,
    background: style.colors.lightGray,
    borderRadius: '50%',
})


const Description = glamorous.p({
    textAlign: 'center'
})

export const Offer = ({ description }) => (
    <Wrapper>
        <Badge />
        <Description>{description}</Description>
    </Wrapper>
)

Offer.propTypes = {
    description: PropTypes.string.isRequired
}