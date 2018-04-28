import React from 'react'
import glamorous from 'glamorous'
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

import { ContactInfo } from '../components/ContactInfo'
import { style, dynamicLayout, mediaQueries } from '../styles'
import { mapStyle } from '../styles/mapStyle'

const location = {
    lat: 50.5987231, lng: 17.6474756
}

const mapConfig = {
    disableDefaultUI: false,
    fullscreenControl: false,
    styles: mapStyle,
}

const MapComponent = withScriptjs(withGoogleMap(() =>
    <GoogleMap
        defaultZoom={12}
        defaultCenter={location}
        defaultOptions={mapConfig}
    >
        <Marker position={location} />
    </GoogleMap>
))

const Wrapper = glamorous.div({
    position: 'relative'
})

const Card = glamorous.div({
    position: 'absolute',
    background: style.colors.white,
    bottom: 20,
    padding: '20px 120px 0 30px',
    [mediaQueries.desktop]: {
        left: dynamicLayout.desktop.pagePadding,
    },
    [mediaQueries.tablet]: {
        left: dynamicLayout.tablet.pagePadding,
    },
    [mediaQueries.phone]: {
        left: dynamicLayout.phone.pagePadding,
    },
    [mediaQueries.panoramic]: {
        left: dynamicLayout.panoramic.pagePadding,
    },
})

export const Map = ({ id }) => (
    <Wrapper id={id}>
        <MapComponent
            googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyBFQfQ5ye7QGCPwdxQdDMk-dXuNKxXDXBg"
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `500px` }} />}
            mapElement={<div style={{ height: `100%` }} />} />
        <Card>
            <ContactInfo />
        </Card>
    </Wrapper>
)