import { FC } from 'react'

import { Button, Col, Row, notification } from 'antd'

import { CheckoutProps } from '../../model/types'
import { checkout } from '../../model/checkoutAction'
import priceFormatter from '@shared/lib/priceFormatter'
import { useAppDispatch } from '@shared/model/types'

import styles from './index.module.scss'


export const Checkout: FC<CheckoutProps> = ({check, userOrderId}) => {
    const dispatch = useAppDispatch()

    const openNotification = (access: boolean | null) => {
        notification.open({
            message: `Заказ № ${userOrderId}`,
            description: 
                access ? 
                'Заказ успешно оформлен, следите за его статусом' 
                : 'Недостаточно товара на скаладе',
            duration: 0
        })
    }

    const checkoutHandler = async () => {
        const result = await dispatch(checkout(userOrderId))

        if(result.meta.requestStatus === 'rejected') {
            openNotification(false)
        } else {
            openNotification(true)
        }
    }

    return (
        <Row 
            justify = "space-between"
            align = 'middle' 
            className = {styles.root}
        >
            <Col>
                <h2><span>Итого к оплате: </span>{priceFormatter(check)} ₽</h2>
            </Col>
            <Col>
                <Button 
                    type = 'primary' 
                    size = 'large'
                    onClick = {checkoutHandler}
                >
                    Оформить заказ
                </Button>
            </Col>
        </Row>
    )
}