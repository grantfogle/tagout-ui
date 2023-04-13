import { useRoutes } from 'react-router-dom'
import Landing from './features/auth/Landing';


export const AppRoutes = () => {
    const commonRoutes = [{path: '/', element: <Landing />}]

    const routes = auth.user ? protectedRoutes : publicRoutes

    const element = useRoutes([...routes, ...commonRoutes])

    return <>{element}</>
}

