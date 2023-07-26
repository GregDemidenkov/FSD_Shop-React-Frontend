import { FC } from 'react'

import { Card } from 'antd'

import { ProductInfo } from '../ProductInfo'
import { ProductTitle } from '../ProductTitle'
import { ProductCardProps } from '@entities/product/model/types'


const { Meta } = Card


export const ProductCard: FC<ProductCardProps> = ({product, children}) => {

    return (
        <Card
            style = {{ width: 400, boxShadow: '1px 4px 10px #BCB8B5' }}
            bordered = {true}
            cover = {
                <img 
                    alt="example" 
                    src={product.img} 
                />
            }
        >
            <Meta
                title = {<ProductTitle name = {product.name}/>}
                description = {<ProductInfo info = {{
                    country: product.country,
                    carats: product.carats,
                    price: product.price
                }}/>}
            />
            <div style = {{marginTop: '20px'}}>
                { children }
            </div>
        </Card>
    )
}