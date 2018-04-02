import React from 'react'
import glamorous from 'glamorous'
import { Link } from 'react-router-dom'

import { HeadLine } from './HeadLine'
import { removeLinkStyles } from '../styles'

const StyledLink = glamorous(Link)({
    zIndex: 2,
    padding: 5,
}, removeLinkStyles)

export const Logo = () => <StyledLink to="/"><HeadLine>POLCER</HeadLine></StyledLink>