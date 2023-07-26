import { FC } from 'react'

import { Col, Row } from 'antd'

import { ProductCard } from '@entities/product'
import { AddToCart } from '@features/AddToCart'


export const Catalog: FC = () => {

    return (
        <div>
            {/* <SortProducts /> */}
            <Row 
                gutter = {[0, 40]} 
                justify='space-between'
            >
                {
                    Array(6).fill(0).map((_, index) => (
                        <Col
                            key = {index}
                            className = "gutter-row"
                            span={8}
                            style={{display: 'flex', justifyContent: 'center'}}
                        >
                            <ProductCard>
                                <AddToCart />
                            </ProductCard>
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}