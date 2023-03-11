import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./pages/routes";
import { Home } from "./pages/Home";
import { Map } from "./pages/Map";
import { FourOhFour } from "./pages/FourOhFour";

// refer to pages/routes.ts for further route information
// this separation exists to prevent circular dependencies
export const router = createBrowserRouter([
    {
        path: ROUTES.home.path,
        element: (<Home />),
        errorElement: (<FourOhFour />)
    },
    {
        path: ROUTES.map.path,
        element: (<Map />),
    },
]);