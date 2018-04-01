import React from 'react'

import { FirebaseConnect } from '../components/FirebaseProvider'
import { Header } from '../sections/Header'

const HomeComponent = (props) => (
    props.isLoading
        ? <div>loading...</div>
        : <div>
            <Header highlights={props.data.highlights} />
        </div>
)

export const Home = FirebaseConnect()(HomeComponent)