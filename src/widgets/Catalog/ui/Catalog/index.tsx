import { FC } from 'react'

import { ProductList } from '@widgets/ProductList'


export const Catalog: FC = () => {

    return (
        <div>
            {/* <SortProducts /> */}
            <ProductList />
        </div>
    )
}