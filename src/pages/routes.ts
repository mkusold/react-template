export const ROUTES = {
    home: {
        name: 'Home',
        path: '/',
        showNav: false,
    },
    map: {
        name: 'Map',
        path: '/map',
        showNav: true,
    }
};

export const NAVITEMS = Object.values(ROUTES).filter((route) => route.showNav);