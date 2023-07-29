import { FC } from 'react'

import { Button } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

import { DeleteFromCartProps } from '@features/DeleteFromCart/model/types'
import { deleteFromCart } from '@features/DeleteFromCart/model/deleteFromCartAction'
import { useAppDispatch } from '@shared/model/types'


export const DeleteFromCart: FC<DeleteFromCartProps> = ({productOrderId, userId}) => {
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