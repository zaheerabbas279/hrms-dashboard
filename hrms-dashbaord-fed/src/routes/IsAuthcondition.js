import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { RouteStrings } from '../utils/common';

export const IsAuthcondition = () => {
    const { isAuth } = useSelector((state) => state.UIStore);
    return (
        <>
            {isAuth ? <Navigate to={RouteStrings.dashboard} replace /> : <Outlet />}
        </>
    )
}