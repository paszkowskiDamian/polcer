import React from 'react'
import PropTypes from 'prop-types'
import { Carousel } from 'antd'

import { Highlight, HighlightProps } from '../../components/Highlight'

export const Header = (props) => (
    <header>
        <Carousel effect="fade" autoplay speed={5000}>
            {props.highlights.map(highlight => (
                <div key={highlight.header}>
                    <Highlight highlight={highlight} />
                </div>)
            )}
        </Carousel>
    </header>
)

Header.propTypes = {
    highlights: PropTypes.arrayOf(HighlightProps).isRequired
}