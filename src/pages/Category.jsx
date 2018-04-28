import React, { Component } from 'react'

import { FirebaseConnect } from '../components/FirebaseProvider'
import { SectionWrapper } from '../components/SectionWrapper'
import { Gallery } from '../components/Gallery'
import { CategoryBanner } from '../components/CategoryBanner'
import { CategorySelector } from '../components/CategorySelector'
import { Empty } from '../components/Empty'

class CategoryComponent extends Component {
    state = {
        products: [],
        currentCategory: {},
    }

    static deriveCurrentCategory(nextProps) {
        const categoryName = nextProps.match.params.category.toLowerCase()

        return nextProps.data.categories
            .find(category => category.name.toLowerCase() === categoryName)
    }

    static deriveProductsToShow(products, categoryId) {
        return products.filter(product => product.categoryId === categoryId)
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        const currentCategory = CategoryComponent.deriveCurrentCategory(nextProps)
        if (currentCategory) {
            const products = CategoryComponent.deriveProductsToShow(
                nextProps.data.products,
                currentCategory.id,
            )
            return { products, currentCategory }
        } else {
            nextProps.history.replace('/404')

            return null
        }
    }

    render() {
        return (
            <div>
                <CategoryBanner name={this.state.currentCategory.name} />
                <SectionWrapper>
                    <CategorySelector
                        categories={this.props.data.categories}
                        currentCategoryId={this.state.currentCategory.id} />
                    {this.state.products.length ? <Gallery products={this.state.products} /> : <Empty />}
                </SectionWrapper>
            </div>
        )
    }
}


export const Category = FirebaseConnect()(CategoryComponent)