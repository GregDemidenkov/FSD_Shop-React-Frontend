import { FC } from 'react'

import { Table } from 'antd'
import Column from 'antd/es/table/Column'

import { CartTableProps, TableData } from '@widgets/CartTable'
import { ChangeCountProductOrder } from '@features/ChangeCountProductOrder'
import { DeleteFromCart } from '@features/DeleteFromCart'
import { ProductRow } from '@entities/product'
import priceFormatter from '@shared/lib/priceFormatter'
import { useAppSelector } from '@shared/model/types'


export const CartTable: FC<CartTableProps> = ({productOrders}) => {
    const { user } = useAppSelector(state => state.auth)

    const data: TableData[] = []
    productOrders.forEach(productOrder => {
        data.push({
            key: productOrder._id,
            product: <ProductRow product = {productOrder.product_id}/>,
            price: `${priceFormatter(productOrder.full_price)} ₽`,
            count: <ChangeCountProductOrder 
                count={productOrder.count}
                maxCount={productOrder.product_id.count}
                productOrderId={productOrder._id}
                userOrderId={productOrder.user_order_id}
                userId={user.id}
            />,
            action: <DeleteFromCart productOrderId = {productOrder._id} userId = {user.id}/>,
        })
    })

    return (
        <Table
            dataSource={data} 
            pagination={false} 
            bordered = {true}
            tableLayout = 'auto'
        >
            <Column title="Товар" dataIndex="product" key="product" align='center'/>
            <Column title="Цена" dataIndex="price" key="price" align='center'/>
            <Column title="Количество" dataIndex="count" key="count" align='center'/>
            <Column title="" dataIndex="action" key="action" align='center' />
            
        </Table>
    )
}