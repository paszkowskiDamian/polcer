import React, { PureComponent, createContext } from 'react'
import { initializeApp, database } from 'firebase'

import { Loader } from './Loader'

const initialState = {
    isLoading: true,
    error: false,
    data: undefined,
}

export const FirebaseContext = createContext(initialState)

export const FirebaseProvider = config => Component => class extends PureComponent {
    state = initialState

    constructor() {
        super()
        this.app = initializeApp(config)
        this.database = database()

        this.getData()
    }

    getData = () => this.database.ref('/').once('value').then(this.storeData).catch(this.handleError)

    storeData = snap => this.setState({
        isLoading: false,
        data: snap.val(),
    })

    handleError = () => this.setState({
        isLoading: false,
        error: true
    })

    render() {
        return (
            <FirebaseContext.Provider value={this.state}>
                <Component {...this.props} />
            </FirebaseContext.Provider>
        )
    }
}

export const FirebaseConnect = (mapStoreToProps = ctx => ctx) => Component => (props) => {
    return (
        <FirebaseContext.Consumer>
            {(context) => !context.isLoading
                ? <Component {...props} {...mapStoreToProps(context)} />
                : <Loader />}
        </FirebaseContext.Consumer>
    )
}
