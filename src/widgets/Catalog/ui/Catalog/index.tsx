import { FC } from 'react'

import { Col, Row } from 'antd'

import { CatalogProps } from '../../model/types'
import { AddToCart } from '@features/AddToCart'
import { SortProducts } from '@features/SortProducts'
import { ProductCard } from '@entities/product'


export const Catalog: FC<CatalogProps> = ({products}) => {

    return (
        <div>
            <Row justify='end' style={{width: '100%', marginBottom: '40px'}}>
                <SortProducts />
            </Row>
            <Row 
                gutter = {[0, 40]}
                justify='start' 
            >
                {
                    products.map((product, index) => (
                        <Col
                            key = {index}
                            className = "gutter-row"
                            span={8}
                            style={{
                                display: 'flex',
                                justifyContent: 'start'
                            }}
                        >
                            <ProductCard 
                                product = {product}
                            >
                                <AddToCart 
                                    productId = {product._id}
                                    count = {product.count}
                                />
                            </ProductCard>
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}