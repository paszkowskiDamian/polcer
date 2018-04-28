import React from 'react'
import PropTypes from 'prop-types'
import glamorous from 'glamorous'

import { Offer, OfferProp } from '../components/Offer'
import { SectionHeader } from '../components/SectionHeader'
import { SectionWrapper } from '../components/SectionWrapper'
import { mediaQueries } from '../styles'

import { ABOUT } from '../content'

const OfferWrapper = glamorous.div({
    display: 'flex',
    margin: '30px 0',
    [mediaQueries.tablet]: {
        flexDirection: 'column',
    },
})

const iconTypes = [
    'folder',
    'edit',
    'api',
]

export const About = ({ about, id }) => (
    <SectionWrapper id={id}>
        <SectionHeader title="O firmie" description={ABOUT} />
        <OfferWrapper>
            {about.map((description, i) => <Offer key={i} description={description} type={iconTypes[i]} />)}
        </OfferWrapper>
    </SectionWrapper>
)

About.propTypes = {
    about: PropTypes.arrayOf(OfferProp).isRequired,
    id: PropTypes.string,
}
