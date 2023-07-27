import { FC } from 'react'
import { Link } from 'react-router-dom'

import { Space } from 'antd'

import config from '@app/routes/config'
import { EmptyCartNavigateProps } from '@pages/cart/model/types'


export const EmptyCartNavigate: FC<EmptyCartNavigateProps> = ({isAuth}) => {    

    return (
        <Space>
            {
                isAuth 
                ?
                <p>Вернитесь в <Link to = {config.catalog}>каталог</Link>, чтобы добавить товары в корзину</p>
                :
                <p><Link to = {config.login}>Войдите</Link> в профиль, чтобы добавить товары в корзину</p>
            }
        </Space>
    )
}