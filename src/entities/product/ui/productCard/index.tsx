import { FC, PropsWithChildren } from 'react'

import { Card } from 'antd'

import { ProductInfo } from '../ProductInfo'
import { ProductTitle } from '../ProductTitle'


const { Meta } = Card


export const ProductCard: FC<PropsWithChildren> = ({children}) => {

    return (
        <Card
            style = {{ width: 400, boxShadow: '1px 4px 10px #BCB8B5' }}
            bordered = {true}
            cover = {
                <img 
                    alt="example" 
                    src="https://gemstock.ru/wa-data/public/shop/products/28/41/4128/images/19252/19252.970.jpg" 
                />
            }
        >
            <Meta
                title = {<ProductTitle />}
                description = {<ProductInfo />}
            />
            <div style = {{marginTop: '20px'}}>
                { children }
            </div>
        </Card>
    )
}