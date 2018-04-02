import React from 'react'
import PropTypes from 'prop-types'
import glamorous from 'glamorous'

import { Card } from './Card'
import { pagePadding } from '../styles'

const Image = glamorous.div((props) => ({
    background: `url(${props.image})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
    backgroundSize: 'cover',
    height: '90vh',
    display: 'flex',
    alignItems: 'center',
}), pagePadding)

export const Highlight = ({ highlight, isActive, willBeActive }) => (
    <Image image={highlight.image} isActive>
        <Card
            isActive={isActive}
            willBeActive={willBeActive}
            header={highlight.header}
            description={highlight.description}
            link={highlight.link} />
    </Image>
)

export const HighlightProps = PropTypes.shape({
    description: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    link: PropTypes.string,
})

Highlight.propTypes = {
    highlight: HighlightProps,
    isActive: PropTypes.bool.isRequired,
    willBeActive: PropTypes.bool.isRequired,
}