import { FC } from 'react'

import { Button } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

import { DeleteFromCartProps } from '@features/DeleteFromCart/model/types'
import { useAppDispatch } from '@app/store/rootStore'
import { deleteFromCart } from '@features/DeleteFromCart/model/deleteFromCartAction'


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