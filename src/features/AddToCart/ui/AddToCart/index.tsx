import { FC } from 'react'

import { Button, InputNumber, Space } from 'antd'

import { AddToCartProps } from '@features/AddToCart/model/types'

import styles from './index.module.scss'


const onChange = (value: number | null) => {
    console.log('changed', value)
}


export const AddToCart: FC<AddToCartProps> = ({productId, count}) => {
    
    return (
        <Space
            className={styles.root}
            size={24}
        >
            <p>Осталось {count} шт</p>
            <Button 
                type='primary'
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