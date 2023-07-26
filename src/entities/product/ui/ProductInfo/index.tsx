import { FC } from 'react'

import { ProductInfoProps } from '@entities/product/model/types'
import priceFormatter from '@shared/lib/priceFormatter'

import styles from './index.module.scss'


export const ProductInfo: FC<ProductInfoProps> = ({info}) => {
    
    return (
        <div className = {styles.root}>
            <p><span>Страна:</span> { info.country }</p>
            <p><span>Караты:</span> { info.carats }</p>
            <p><span>Цена:</span> { priceFormatter(info.price)} ₽</p>
        </div>
    )
}