import React from 'react'
import PropTypes from 'prop-types'
import glamorous from 'glamorous'

const Image = glamorous.div((props) => ({
    background: `url(${props.image})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'right',
    backgroundSize: 'cover',
    height: '90vh',
}))

export const Highlight = ({ highlight }) => (
    <Image image={highlight.image}>
        <h1>{highlight.header}</h1>
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