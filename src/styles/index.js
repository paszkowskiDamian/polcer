export const style = {
    colors: {
        black: '#1a1a1a',
        darkGray: '#707070',
        lightGray: '#f1f1f1',
        gold: '#c69c6d',
        white: 'white',
    },
    fonts: {
        big: '1.3em',
        standard: '1em',
        small: '0.8em',
    }
}

export const mediaQueries = {
    phone: '@media only screen and (max-width: 500px)',
    tablet: '@media only screen and (max-width: 800px)',
    desktop: '@media only screen and (max-width: 1300px)',
    panoramic: '@media only screen and (min-width: 1300px)',
}

export const dynamicLayout = {
    phone: {
        pagePadding: 50,
    },
    tablet: {
        pagePadding: 100,
    },
    desktop: {
        pagePadding: 150,
    },
    panoramic: {
        pagePadding: 200,
    },
}

export const pagePadding = {
    [mediaQueries.desktop]: {
        padding: `0 ${dynamicLayout.desktop.pagePadding}px`,
    },
    [mediaQueries.tablet]: {
        padding: `0 ${dynamicLayout.tablet.pagePadding}px`,
    },
    [mediaQueries.phone]: {
        padding: `0 ${dynamicLayout.phone.pagePadding}px`,
    },
    [mediaQueries.panoramic]: {
        padding: `0 ${dynamicLayout.panoramic.pagePadding}px`,
    }
}

export const removeLinkStyles = {
    '&:hover, &:visited, &:active, &:focus, &:link': {
        textDecoration: 'none',
    }
}