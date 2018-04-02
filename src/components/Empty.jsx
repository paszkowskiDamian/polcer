import React from 'react'
import glamorous from 'glamorous'

const Wrapper = glamorous.div({
    marginTop: 50,
})

const Sorry = glamorous.h2({
    textAlign: 'center'
})

const Message = glamorous.p({
    textAlign: 'center'
})

export const Empty = () => (
    <Wrapper>
        <Sorry>Przepraszamy</Sorry>
        <Message>Obecnie wciąż pracujemy nad tą sekcją, zapraszamy do innych kategorii</Message>
    </Wrapper>)