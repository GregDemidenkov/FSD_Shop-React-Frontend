import { FC, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { Menu, MenuProps } from 'antd'

import config from '@shared/routes/config'


const items: MenuProps['items'] = [
    {
        label: (
            <Link to = {config.catalog}>
                Каталог
            </Link>
        ),
        key: 'catalog',
        style: {color: 'white', textTransform: 'uppercase'}
    },
    {
        label: (
            <Link to = {config.cart}>
                Корзина
            </Link>
        ),
        key: 'cart',
        style: {color: 'white', textTransform: 'uppercase'}
    },
]


export const HeaderMenu: FC = () => {
    const location = useLocation()
    const [active, setActive] = useState(location.pathname.slice(1))

    useEffect(() => {
        setActive(location.pathname.slice(1))
    }, [location])

    return (
        <Menu   
            theme="dark"
            mode="horizontal"
            selectedKeys={[active]}
            items = {items}
        />
    )
}