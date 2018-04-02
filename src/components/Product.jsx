import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import glamorous from 'glamorous'

import { Description } from './Description'
import { mediaQueries } from '../styles'

const WrapperFactory = (component) => glamorous(component)({
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

export const Product = ({ name, image, linkTo }) => {
    const Wrapper = linkTo ? WrapperFactory(Link) : WrapperFactory(glamorous.div())
    return (
        <Wrapper to={`/${linkTo}/${name}`}>
            <Image src={image} alt={name} />
            <Description>{name.toUpperCase()}</Description>
        </Wrapper>
    )
}

export const ProductProps = {
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    linkTo: PropTypes.string
}

Product.propTypes = ProductProps