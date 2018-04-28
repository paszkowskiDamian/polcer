import React from 'react'
import ReactLoader from 'react-loaders'
import glamorous from 'glamorous'

import { style } from '../styles'

const Wrapper = glamorous.div({
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
})

export const Loader = () => (
    <Wrapper>
        <ReactLoader type="ball-triangle-path" color={style.colors.darkGray} />
    </Wrapper>)