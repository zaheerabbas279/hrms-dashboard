import React from 'react'
import { Link } from 'react-router-dom'
import { RouteStrings } from '../../utils/common'
import './Sidebar.scss'

export const Sidebar = () => {
    return (
        <div className='sidebar'>
            <ul className='sidebar_options'>
                <li><Link to={RouteStrings.dashboard} className='sidebar_link'>Dashboard</Link></li>
                <li><Link to={RouteStrings.leaves} className='sidebar_link'>Leaves</Link> </li>
                <li><Link to={RouteStrings.createuser} className='sidebar_link'>Create User</Link> </li>
                <li><Link to={RouteStrings.createrole} className='sidebar_link'>Roles</Link> </li>
                <li><Link to={RouteStrings.settings} className='sidebar_link'>Settings</Link> </li>
            </ul>
        </div>
    )
}
