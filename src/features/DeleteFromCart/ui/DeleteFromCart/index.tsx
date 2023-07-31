import { FC } from 'react'

import { Button } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

import { DeleteFromCartProps, deleteFromCart } from '@features/DeleteFromCart'
import { useAppDispatch } from '@shared/model/types'


export const DeleteFromCart: FC<DeleteFromCartProps> = ({
    productOrderId,
    userId
}) => {
    const dispatch = useAppDispatch()

    return (
        <Button 
            type = 'primary' 
            danger 
            icon={<DeleteOutlined />} 
            onClick={() => dispatch(deleteFromCart({productOrderId, userId}))}
        />
    )
}