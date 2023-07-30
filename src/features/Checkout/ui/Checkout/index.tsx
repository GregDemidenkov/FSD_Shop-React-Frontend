import { FC } from 'react'

import { Button, Col, Row } from 'antd'

import { CheckoutProps } from '../../model/types'
import { checkout } from '../../model/checkoutAction'
import priceFormatter from '@shared/lib/priceFormatter'
import { useAppDispatch } from '@shared/model/types'

import styles from './index.module.scss'


export const Checkout: FC<CheckoutProps> = ({check, userOrderId}) => {
    const dispatch = useAppDispatch()

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
                    onClick = {() => dispatch(checkout(userOrderId))}
                >
                    Оформить заказ
                </Button>
            </Col>
        </Row>
    )
}