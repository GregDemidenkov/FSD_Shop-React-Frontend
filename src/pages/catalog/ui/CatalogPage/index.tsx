import { FC, useEffect } from 'react'

import { getProducts } from '../../model/getProductsAction'
import { LayoutHeader } from '@widgets/LayoutHeader'
import { Catalog } from '@widgets/Catalog'
import { LayoutFooter } from '@shared/ui/LayoutFooter'
import { BaseLayout } from '@shared/ui/BaseLayout'
import { useAppDispatch, useAppSelector } from '@shared/model/types'


export const CatalogPage: FC = () => {
    const dispatch = useAppDispatch()
    const { products, sort } = useAppSelector(
        (state) => state.products
    )

    useEffect(() => {
        dispatch(getProducts(sort))
    }, [sort])

    return (
        <BaseLayout 
            header = {<LayoutHeader />}
            footer = {<LayoutFooter />}
        >
            <Catalog products = {products}/>
        </BaseLayout>
    )
}