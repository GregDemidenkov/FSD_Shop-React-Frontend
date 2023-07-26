import { FC } from 'react'

import styles from './index.module.scss'


export const ProductInfo: FC = () => {
    
    return (
        <div className = {styles.root}>
            <p><span>Страна:</span> Танзания</p>
            <p><span>Караты:</span> 8.01</p>
            <p><span>Цена:</span> 5 262 400 ₽</p>
        </div>
    )
}