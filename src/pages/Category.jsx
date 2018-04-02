import React, { Component } from 'react'

import { FirebaseConnect } from '../components/FirebaseProvider'

class CategoryComponent extends Component {
    render() {
        return (
            <div>

            </div>
        )
    }
}


const mapStoreToProps = store => {
    const { data } = store
    console.log(data)
    return store
}

export const Category = FirebaseConnect(mapStoreToProps)(CategoryComponent)