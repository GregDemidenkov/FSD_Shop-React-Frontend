import { FC, useEffect } from 'react'

import { Space } from 'antd'

import { EmptyCart } from '../EmptyCart'
import { EmptyCartNavigate } from '../EmptyCartNavigate'
import { getUserOrder } from '../../model/getUserOrderAction'
import { useAppDispatch, useAppSelector } from '@app/store/rootStore'
import { CartTable } from '@widgets/CartTable'
import { LayoutHeader } from '@widgets/LayoutHeader'
import { LayoutFooter } from '@shared/ui/LayoutFooter'
import { BaseLayout } from '@shared/ui/BaseLayout'

import styles from './index.module.scss'


export const CartPage: FC = () => {
    const dispatch = useAppDispatch()
    const { user, isAuth } = useAppSelector(
        (state) => state.auth
    )
    const { productOrders } = useAppSelector(
        (state) => state.cart
    )

    useEffect(() => {
        if(isAuth) dispatch(getUserOrder(user.id))
    }, [dispatch])

    return (
        <BaseLayout 
            header = {<LayoutHeader />}
            footer = {<LayoutFooter />}
        >
            {
                productOrders.length > 0
                ?
                    <CartTable productOrders = {productOrders}/>
                :
                <Space 
                    direction='vertical' 
                    align='center'
                    size={32}
                    className={styles.root}
                >
                    <EmptyCart />
                    <EmptyCartNavigate isAuth = {isAuth}/>
                </Space>
            }
        </BaseLayout>
    )
}