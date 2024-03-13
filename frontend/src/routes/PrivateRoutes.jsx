import { Outlet, Navigate } from 'react-router-dom'
import {useSelector} from "react-redux"

const PrivateRoutes = () => {
    const user = useSelector((state) => state?.login?.content?.response)
    console.log(user?.token)
    
    return(
        user?.token ? 
            <Outlet/> : 
            <Navigate to="/login"/>
    )
}

export default PrivateRoutes