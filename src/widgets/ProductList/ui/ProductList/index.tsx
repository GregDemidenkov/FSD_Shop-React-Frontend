import { FC } from 'react'

import { Col, Row } from 'antd'

import { ProductCard } from '@entities/productCard'


export const ProductList: FC = () => {

    return (
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
                        <ProductCard />
                    </Col>
                ))
            }
        </Row>
    )
}