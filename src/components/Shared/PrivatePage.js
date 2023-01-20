import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider';
import Login from '../LoginPage/Login';

const PrivatePage = ({ children }) => {
    const { user } = useContext(AuthContext);
    if (!user)
        return <Login />
    if(user)
        return children;

};

export default PrivatePage;