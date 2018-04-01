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

export const Highlight = ({ highlight }) => (
    <Image image={highlight.image}>
        <Card
            header={highlight.header}
            description={highlight.description}
            link={'link'} />
    </Image>
)

export const HighlightProps = PropTypes.shape({
    description: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
})

Highlight.propTypes = {
    highlight: HighlightProps
}