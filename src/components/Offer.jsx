import React from 'react'
import PropTypes from 'prop-types'
import glamorous from 'glamorous'

import { Badge } from './Badge'
import { Description } from './Description'
import { mediaQueries } from '../styles'

const Wrapper = glamorous.div({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '0 15px',
    '&:first-child': {
        marginLeft: 0,
    },
    '&:last-child': {
        marginRight: 0,
    },
    [mediaQueries.tablet]: {
        margin: 0,
    }
})

const Body = glamorous.p({
    textAlign: 'center'
})

export const Offer = ({ description, type }) => (
    <Wrapper>
        <Badge type={type} />
        <Description>{description.header}</Description>
        <Body>{description.body}</Body>
    </Wrapper>
)

export const OfferProp = PropTypes.shape({
    header: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
}).isRequired

Offer.propTypes = {
    description: OfferProp,
    type: PropTypes.string,
}