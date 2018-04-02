import React, { Fragment } from 'react'

import { FirebaseConnect } from '../components/FirebaseProvider'
import { Header } from '../sections/Header'
import { About } from '../sections/About'
import { Products } from '../sections/Products'
import { Map } from '../sections/Map'

import { menuHash } from '../components/Navigation'

const HomeComponent = ({ isLoading, data }) => (
    <Fragment>
        <Header highlights={data.highlights} />
        <About id={menuHash[0]} about={data.about} />
        <Products id={menuHash[1]} products={data.categories} />
        <Map id={menuHash[2]} />
    </Fragment >
)

export const Home = FirebaseConnect()(HomeComponent)