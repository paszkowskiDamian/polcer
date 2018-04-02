import React, { Fragment } from 'react'

import { FirebaseConnect } from '../components/FirebaseProvider'
import { Navigation } from '../components/Navigation'
import { Header } from '../sections/Header'
import { About } from '../sections/About'
import { Products } from '../sections/Products'
import { Map } from '../sections/Map'

const HomeComponent = ({ isLoading, data }) => (
    <Fragment>
        <Navigation />
        <Header highlights={data.highlights} />
        <About about={data.about} />
        <Products products={data.categories} />
        <Map />
    </Fragment>
)

export const Home = FirebaseConnect()(HomeComponent)