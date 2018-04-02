import React from 'react'
import { Link } from 'react-router-dom'
import glamorous from 'glamorous'

import { mediaQueries, style, removeLinkStyles } from '../styles'

const Wrapper = glamorous.div({
    alignSelf: 'flex-start',
    width: '30%',
    minWidth: 320,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    [mediaQueries.tablet]: {
        flexDirection: 'column',
    }
})

const StyledLink = glamorous(Link)({
    color: style.colors.black,

    '&:hover': {
        color: style.colors.gold,
    },
    [mediaQueries.tablet]: {
        padding: '10px 0',
    }
}, removeLinkStyles)

const ActiveWrapper = glamorous.span(props => ({
    fontWeight: props.isActive ? 600 : 'initial',
}))

export const CategorySelector = ({ categories, currentCategoryId }) => (
    <Wrapper>
        {categories.map(category => <StyledLink
            key={category.id}
            to={category.name}>
            <ActiveWrapper isActive={category.id === currentCategoryId}>
                {category.name}
            </ActiveWrapper>
        </StyledLink>)}
    </Wrapper>
)