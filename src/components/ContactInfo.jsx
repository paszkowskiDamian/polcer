import React, { Fragment } from 'react'
import glamorous from 'glamorous'

import { HeadLine } from './HeadLine'

const Line = glamorous.p({
    margin: 0
})

const Block = glamorous.div({
    marginBottom: 20,
})

export const ContactInfo = () => (
    <Fragment>
        <HeadLine>POLCER</HeadLine>
        <Block>
            <Line>49-130 Tułowice</Line>
            <Line>ul.Przemysłowa 11</Line>
        </Block>
        <Block>
            <Line>+48 600 499 703</Line>
            <Line>biuro@polcer.pl</Line>
        </Block>
    </Fragment >
)