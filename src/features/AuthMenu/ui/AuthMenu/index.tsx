import { FC } from 'react'
import { NavLink  } from 'react-router-dom'

import { Space } from 'antd'

import config from '@app/routes/config'

import style from './index.module.scss'


export const AuthMenu: FC = () => {

    return (
        <Space className = {style.root} size={32}>
            <NavLink 
                className = {
                    ({ isActive }) => isActive ? style.active : style.link
                } 
                to = {config.login}
                >
                    Вход
            </NavLink >
            <NavLink
                className = {
                    ({ isActive }) => isActive ? style.active : style.link
                } 
                to = {config.registration}
                >
                    Регистрация
            </NavLink >
        </Space>
    )
}