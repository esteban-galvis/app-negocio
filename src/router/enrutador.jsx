import Acerca from "../pages/acerca"
import Contactos from "../pages/contactos"
import Home from "../pages/home"
import Login from "../pages/login"
import Servicios from "../pages/servicios"

export let enrutador =[
    {
        path: '/',
        element: <Login/>
    },
    {
        path: '/home',
        element: <Home/>
    },
    {
        path: '/servicios',
        element: <Servicios/>
    },
    {
        path: '/contactos',
        element: <Contactos/>
    },
    {
        path: '/acerca de',
        element: <Acerca/>
    }
]