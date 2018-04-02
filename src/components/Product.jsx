import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import glamorous from 'glamorous'

import { style, mediaQueries } from '../styles'

const Wrapper = glamorous(Link)({
    width: '32%',
    marginBottom: 20,
    cursor: 'pointer',
    zIndex: 1,
    [mediaQueries.tablet]: {
        width: '49%',
    },
    [mediaQueries.phone]: {
        width: '100%',
    }
})

const Image = glamorous.img({
    width: '100%',
})

const Description = glamorous.p({
    letterSpacing: '1px',
    textAlign: 'center',
    color: style.colors.black,
})

export const Product = ({ name, image }) => (
    <Wrapper to={`/kategoria/${name}`}>
        <Image src={image} alt={name} />
        <Description>{name.toUpperCase()}</Description>
    </Wrapper>
)

export const ProductProps = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
}

Product.propTypes = ProductProps