import { FC, useState } from 'react'

import { Button, InputNumber, Space, message } from 'antd'

import { addProductOrder } from '@features/AddToCart/model/addToCartAction'
import { AddToCartProps } from '@features/AddToCart/model/types'
import { useAppDispatch, useAppSelector } from '@shared/model/types'
import { Message } from '@shared/ui/Message'

import styles from './index.module.scss'


export const AddToCart: FC<AddToCartProps> = ({productId, count}) => {
    if(!count) {
        return (
            <Message 
                text = {'Товара нет в наличии'} 
                type = {'error'}
            />
        )
    }

    const dispatch = useAppDispatch()
    const { user } = useAppSelector(
        (state) => state.auth
    )
    const [currCount, setCurrCount] = useState<number>(1)
    const [messageApi, contextHolder] = message.useMessage()

    const onChange = (value: number | null) => {
        setCurrCount(value != null ? value : 1)
    }

    const info = () => {
        messageApi.info(`Товар в количестве ${currCount} шт. добавлен в корзину!`)
    }

    const addToCartHandler = () => {
        dispatch(addProductOrder({
            userId: user.id,
            productOrder: {
                id: productId,
                count: currCount
            }
        }))
        info()
    }

    return (
        <Space
            className={styles.root}
            size={24}
        >
            {contextHolder}
            <p>Осталось {count} шт</p>
            <Button 
                type='primary'
                onClick = {addToCartHandler}
            >
                В корзину
            </Button>
            <InputNumber
                style={{width: '60px'}}
                min={1}
                max={count}
                defaultValue={1}
                onChange={onChange}
            />
        </Space>
    )
}