import React from 'react'
import PropTypes from 'prop-types'
import glamorous from 'glamorous'

import { Product, ProductProps } from './Product'

const Wrapper = glamorous.div({
    marginTop: 50,
    width: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
})

export const Gallery = ({ products, linkTo }) => (
    <Wrapper>
        {products.map(product => <Product
            key={product.id}
            {...product}
            linkTo={linkTo} />)}
    </Wrapper>
)

Gallery.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape(ProductProps)
    ).isRequired,
    linkTo: PropTypes.string
}