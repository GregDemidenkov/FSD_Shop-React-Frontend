import { FC, useEffect } from 'react'

import { Col, Row } from 'antd'

import { CatalogProps } from '../../model/types'
import { clearActiveProducts } from '@pages/catalog/model/slice'
import { AddToCart } from '@features/AddToCart'
import { SortProducts } from '@features/SortProducts'
import { ProductCard } from '@entities/product'
import { getActiveProducts } from '@entities/product/model/getActiveProductsAction'
import { useAppDispatch, useAppSelector } from '@shared/model/types'
import { Message } from '@shared/ui/Message'


export const Catalog: FC<CatalogProps> = ({products}) => {
    const dispatch = useAppDispatch()
    const { isAuth, user } = useAppSelector(state => state.auth)
    const { activeProducts } = useAppSelector(state => state.products)

    useEffect(() => {
        dispatch(clearActiveProducts())
        if(isAuth) {
            dispatch(getActiveProducts(user.id))
        }
    }, [isAuth])

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
                                {
                                    !activeProducts.includes(product._id)
                                    ?
                                    <AddToCart 
                                        productId = {product._id}
                                        count = {product.count}
                                    />
                                    :
                                    <Message text = {'Товар добавлен в корзину'} type = {'info'}/>
                                }
                            </ProductCard>
                        </Col>
                    ))
                }
            </Row>
        </div>
    )
}