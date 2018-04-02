import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import glamorous from 'glamorous'

import { HeadLine } from './HeadLine'
import { mediaQueries } from '../styles'

const Description = glamorous.p({
    width: '40%',
    minWidth: 320,
    textAlign: 'center',
    [mediaQueries.phone]: {
        width: '100%',
    }
})

export const SectionHeader = ({ title, description }) => (
    <Fragment>
        <HeadLine>{title.toUpperCase()}</HeadLine>
        <Description>{description}</Description>
    </Fragment>
)

SectionHeader.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}