import React from 'react'
import PropTypes from 'prop-types'
import glamorous from 'glamorous'

import { SectionHeader } from '../components/SectionHeader'
import { SectionWrapper } from '../components/SectionWrapper'
import { ProductProps } from '../components/Product'
import { Gallery } from '../components/Gallery'



export const Products = ({ products }) => (
    <SectionWrapper>
        <SectionHeader title="produkty" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias vel ab quo mollitia vitae fugiat odit placeat voluptatibus culpa aperiam quaerat reiciendis expedita iusto laboriosam, tempore laborum sint dicta? Quasi!" />
        <Gallery products={products} />
    </SectionWrapper>
)

Products.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape(ProductProps)
    ).isRequired
}