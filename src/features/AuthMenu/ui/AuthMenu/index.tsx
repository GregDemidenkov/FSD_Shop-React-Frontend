import { FC } from 'react'
import { NavLink  } from 'react-router-dom'

import { Space } from 'antd'

import { Welcome } from '../Welcome'
import config from '@app/routes/config'
import { useAppDispatch, useAppSelector } from '@app/store/rootStore'
import { logout } from '@entities/auth/model/slice'

import style from './index.module.scss'


export const AuthMenu: FC = () => {
    const dispatch = useAppDispatch()
    const { isAuth, user } = useAppSelector(
        (state) => state.auth
    )

    return (
        <Space className = {style.root} size={32}> 
            {
                isAuth === false ?
                <>
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
                </>
                :
                <>
                    <Welcome name = {user.name} />
                    <NavLink
                        className = {
                            ({ isActive }) => isActive ? style.active : style.link
                        }
                        onClick={() => dispatch(logout())}
                        to = {config.login}
                        >
                            Выход
                    </NavLink >
                </>
            }
        </Space>
    )
}