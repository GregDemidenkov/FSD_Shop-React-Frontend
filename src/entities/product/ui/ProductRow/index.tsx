import { FC } from 'react'

import { Space } from 'antd'

import { ProductRowProps } from '@entities/product/model/types'
import priceFormatter from '@shared/lib/priceFormatter'


export const ProductRow: FC<ProductRowProps> = ({product}) => {

    return (
        <Space align='start' style={{width: '100%'}} size={30}>
            <img src={product.img} alt="" style={{width: '180px'}} />
            <Space direction='vertical' align='start'>
                <h2 style={{fontSize: '18px', fontWeight: '700'}}>{product.name}</h2>
                <Space direction='vertical' align='start'>
                    <p><span>Страна: </span>{product.country}</p>
                    <p><span>Караты: </span>{product.carats}</p>
                    <p><span>Цена: </span>{priceFormatter(product.price)} ₽</p>
                </Space>
            </Space>
        </Space>
    )
}