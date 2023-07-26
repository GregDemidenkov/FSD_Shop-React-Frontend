import { FC } from 'react'

import { Col, Row } from 'antd'

import { CatalogProps } from '@widgets/Catalog/model/typs'
import { AddToCart } from '@features/AddToCart'
import { ProductCard } from '@entities/product'


export const Catalog: FC<CatalogProps> = ({products}) => {

    return (
        <div>
            {/* <SortProducts /> */}
            <Row 
                gutter = {[0, 40]} 
                justify='space-between'
            >
                {
                    products.map((product, index) => (
                        <Col
                            key = {index}
                            className = "gutter-row"
                            span={8}
                            style={{
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <ProductCard 
                                product = {product}
                            >
                                <AddToCart 
                                    productId = {product.id}
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