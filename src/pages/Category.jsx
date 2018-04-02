import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { FirebaseConnect } from '../components/FirebaseProvider'
import { SectionWrapper } from '../components/SectionWrapper'
import { Gallery } from '../components/Gallery'
import { CategoryBanner } from '../components/CategoryBanner'

class CategoryComponent extends Component {
    state = {
        products: [],
        currentCategoryName: '',
    }

    static deriveCurrentCategory(nextProps) {
        const categoryName = nextProps.match.params.category.toLowerCase()
        return nextProps.data.categories
            .find(category => category.name.toLowerCase() === categoryName)
    }

    static deriveProductsToShow(products, categoryId) {
        return products.filter(product => product.id === categoryId)
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const currentCategory = CategoryComponent.deriveCurrentCategory(nextProps)

        if (currentCategory) {
            const products = CategoryComponent.deriveProductsToShow(
                nextProps.data.products,
                currentCategory.id,
            )
            return { products, currentCategoryName: currentCategory.name }
        } else {
            nextProps.history.replace('/404')

            return null
        }
    }

    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div>
                <CategoryBanner name={this.state.currentCategoryName} />
                <SectionWrapper>
                    <Link to="/kategoria/hello">other</Link>
                    <Gallery products={this.state.products} />
                </SectionWrapper>
            </div>
        )
    }
}


export const Category = FirebaseConnect()(CategoryComponent)