import { FC } from 'react'

import { Button } from 'antd'

import { ClearCartProps, clearCart } from '@features/ClearCart'
import { useAppDispatch } from '@shared/model/types'


export const ClearCart: FC<ClearCartProps> = ({userOrderId}) => {
    const dispatch = useAppDispatch()

    return (
        <Button 
            style={{background: 'inherit'}}
            size='large'
            danger
            onClick={() => dispatch(clearCart(userOrderId))}
        >
            Очистить корзину
        </Button>
    )
}