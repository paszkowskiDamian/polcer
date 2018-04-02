import React from 'react'
import PropTypes from 'prop-types'
import glamorous from 'glamorous'

import { Offer } from '../components/Offer'
import { SectionHeader } from '../components/SectionHeader'
import { SectionWrapper } from '../components/SectionWrapper'
import { mediaQueries } from '../styles'

const OfferWrapper = glamorous.div({
    display: 'flex',
    margin: '30px 0',
    [mediaQueries.tablet]: {
        flexDirection: 'column',
    },
})

export const About = ({ about }) => (
    <SectionWrapper>
        <SectionHeader title="Oferta" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, eos repellendus ad iure consequatur maxime beatae, iusto nostrum debitis praesentium commodi animi corporis nulla voluptatum quibusdam perspiciatis soluta amet sint?" />
        <OfferWrapper>
            {about.map((description, i) => <Offer key={i} description={description} />)}
        </OfferWrapper>
    </SectionWrapper>
)

About.propTypes = {
    about: PropTypes.arrayOf(PropTypes.string).isRequired
}
