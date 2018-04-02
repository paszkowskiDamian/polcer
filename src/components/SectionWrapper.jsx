import glamorous from 'glamorous'

import { pagePadding } from '../styles'

export const SectionWrapper = glamorous.div({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 30,
}, pagePadding)