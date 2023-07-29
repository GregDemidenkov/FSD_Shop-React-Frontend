import { FC, useEffect } from 'react'

import { Row, Space } from 'antd'

import { EmptyCart } from '../EmptyCart'
import { EmptyCartNavigate } from '../EmptyCartNavigate'
import { getUserOrder } from '../../model/getUserOrderAction'
import { CartTable } from '@widgets/CartTable'
import { LayoutHeader } from '@widgets/LayoutHeader'
import { ClearCart } from '@features/ClearCart'
import { LayoutFooter } from '@shared/ui/LayoutFooter'
import { BaseLayout } from '@shared/ui/BaseLayout'
import { useAppDispatch, useAppSelector } from '@shared/model/types'

import styles from './index.module.scss'


export const CartPage: FC = () => {
    const dispatch = useAppDispatch()
    const { user, isAuth } = useAppSelector(
        (state) => state.auth
    )
    const { productOrders, userOrderId } = useAppSelector(
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
                    <>
                        <Row 
                            justify='end'
                            className = {styles.clearCartWrapper}
                        >
                            <ClearCart userOrderId = {userOrderId}/>
                        </Row>
                        <CartTable productOrders = {productOrders}/>
                    </>
                :
                <Space 
                    direction='vertical' 
                    align='center'
                    size={32}
                    className={styles.empty}
                >
                    <EmptyCart />
                    <EmptyCartNavigate isAuth = {isAuth}/>
                </Space>
            }
        </BaseLayout>
    )
}