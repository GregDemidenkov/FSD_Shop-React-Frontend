import { FC } from 'react'

import { ProductTitleProps } from '@entities/product/model/types'


export const ProductTitle: FC<ProductTitleProps> = ({name}) => {

    return (
        <div 
            style={{height: '60px', whiteSpace: 'normal'}}
        >
            { name }
        </div>
    )
}