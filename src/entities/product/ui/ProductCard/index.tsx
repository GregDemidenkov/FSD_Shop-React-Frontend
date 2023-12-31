import { FC } from 'react'
import { Link } from 'react-router-dom'

import { Card } from 'antd'

import { ProductInfo } from '../ProductInfo'
import { ProductTitle } from '../ProductTitle'
import { ProductCardProps } from '@entities/product/model/types'
import { Message } from '@shared/ui/Message'
import { useAppSelector } from '@shared/model/types'
import config from '@shared/routes/config'


const { Meta } = Card


export const ProductCard: FC<ProductCardProps> = ({product, children}) => {
    const { isAuth } = useAppSelector(
        (state) => state.auth
    )
    
    return (
        <Card
            style = {{ width: 400, boxShadow: '1px 4px 10px #BCB8B5', margin: 'auto' }}
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
            <div style = {{marginTop: '20px', height: '50px'}}>
                {
                    isAuth
                    ?
                    children
                    :
                    <div style={{margin: '10px 0'}} >
                        <Message 
                            type='info'
                            text={<p><Link to = {config.login}>Войдите</Link> в профиль, чтобы добавить товар в корзину</p>}
                        />
                    </div>
                }
            </div>
        </Card>
    )
}