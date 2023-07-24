import { FC } from 'react'
import { NavLink  } from 'react-router-dom'

import { Space } from 'antd'

import config from '@app/routes/config'

import style from './index.module.scss'


export const AuthMenu: FC = () => {

    return (
        <Space className = {style.root}>
            <NavLink 
                className = {
                    ({ isActive }) => isActive ? style.active : style.link
                } 
                to = {config.login}
                >
                    Sign In
            </NavLink >
            <NavLink
                className = {
                    ({ isActive }) => isActive ? style.active : style.link
                } 
                to = {config.registration}
                >
                    Sign Up
            </NavLink >
        </Space>
    )
}