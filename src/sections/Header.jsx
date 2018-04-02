import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Carousel } from 'antd'

import { Highlight, HighlightProps } from '../components/Highlight'

export class Header extends Component {
    state = {
        activeIndex: 0,
        willBeActive: 0,
    }

    beforeChange = (_, willBeActive) => this.setState({ willBeActive })

    afterChange = activeIndex => this.setState({ activeIndex })

    render() {
        return (
            <header>
                <Carousel
                    afterChange={this.afterChange}
                    beforeChange={this.beforeChange}
                    focusOnSelect
                    lazyLoad={'progressive'}
                    // effect="fade" //does not work properly
                    autoplay
                    autoplaySpeed={5000}
                    speed={2000}>
                    {this.props.highlights.map((highlight, i) => (
                        <div key={highlight.header}>
                            <Highlight
                                highlight={highlight}
                                isActive={this.state.activeIndex === i}
                                willBeActive={this.state.willBeActive === i} />
                        </div>)
                    )}
                </Carousel>
            </header >
        )
    }
}

Header.propTypes = {
    highlights: PropTypes.arrayOf(HighlightProps).isRequired
}