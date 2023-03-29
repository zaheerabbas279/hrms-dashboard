import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.scss'

export const Sidebar = () => {
    return (
        <div className='sidebar'>
            <ul className='sidebar_options'>
                <li><Link to='/' className='sidebar_link'>Dashboard</Link></li>
                <li><Link to='/attendance' className='sidebar_link'>Attendance</Link> </li>
            </ul>
        </div>
    )
}
