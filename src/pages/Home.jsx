import React from 'react'

import { FirebaseConnect } from '../components/FirebaseProvider'
import { Header } from './sections/Header'

const HomeComponent = (props) => (
    <div>
        {console.log(props)}
        <Header />
    </div>
)

export const Home = FirebaseConnect()(HomeComponent)