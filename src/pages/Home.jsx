import React from 'react'

import { FirebaseConnect } from '../components/FirebaseProvider'
import { Header } from '../sections/Header'
import { About } from '../sections/About'
import { Products } from '../sections/Products'

const HomeComponent = ({ isLoading, data }) => (
    isLoading
        ? <div>loading...</div>
        : <div>
            {console.log(data)}
            <Header highlights={data.highlights} />
            <About about={data.about} />
            <Products />
        </div>
)

export const Home = FirebaseConnect()(HomeComponent)