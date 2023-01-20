import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import Login from '../LoginPage/Login';

const PrivateAdmin = ({ children }) => {
    const { user } = useContext(AuthContext);
    const [userInfo, setUserInfo] = useState(null);
    const navigate = useNavigate()
    useEffect(() => {
        fetch(`http://localhost:5005/userinfo/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setUserInfo(data[0])
            })
            .catch(err => console.log(err.message))
    }, [user])
    console.log(userInfo);


    if (userInfo?.role !== 'admin') {
        return navigate('/dashboard/myprofile')
    }
    else {
        return children;
    }

};

export default PrivateAdmin