import { FC } from 'react'

import { Button } from 'antd'

import { ClearCartProps } from '../../model/types'
import { clearCart } from '../../model/clearCartAction'
import { useAppDispatch } from '@app/store/rootStore'


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