import React, { useContext } from 'react';
import { AuthContex } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRouter = ({children}) => {
    const {user} = useContext(AuthContex)
    const loctation = useLocation()
    if(user){
      return children;
    }
    return (<Navigate state={{from : loctation}} to='/login'></Navigate>);
};

export default PrivateRouter;