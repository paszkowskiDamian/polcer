import React from 'react'
import PropTypes from 'prop-types'

import { SectionHeader } from '../components/SectionHeader'
import { SectionWrapper } from '../components/SectionWrapper'
import { ProductProps } from '../components/Product'
import { Gallery } from '../components/Gallery'
import { PRODUCTS } from '../content'

export const Products = ({ products, id }) => (
    <SectionWrapper id={id}>
        <SectionHeader title="produkty" description={PRODUCTS} />
        <Gallery products={products} linkTo="kategoria" />
    </SectionWrapper>
)

Products.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape(ProductProps)
    ).isRequired,
    id: PropTypes.string,
}