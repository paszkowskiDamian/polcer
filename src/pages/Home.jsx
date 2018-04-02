import React from 'react'

import { FirebaseConnect } from '../components/FirebaseProvider'
import { Header } from '../sections/Header'
import { About } from '../sections/About'

const HomeComponent = (props) => (
    props.isLoading
        ? <div>loading...</div>
        : <div>
            <Header highlights={props.data.highlights} />
            <About about={props.data.about} />
        </div>
)

export const Home = FirebaseConnect()(HomeComponent)