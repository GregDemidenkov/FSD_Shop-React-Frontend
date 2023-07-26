import { FC, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getProducts } from '../model/slice'
import { RootState } from '@app/store/rootStore'
import { LayoutHeader } from '@widgets/LayoutHeader'
import { Catalog } from '@widgets/Catalog'
import { LayoutFooter } from '@shared/ui/LayoutFooter'
import { BaseLayout } from '@shared/ui/BaseLayout'


export const CatalogPage: FC = () => {
    const dispatch = useDispatch()
    const products = useSelector((state: RootState) => state.products.list)

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    return (
        <BaseLayout 
            header = {<LayoutHeader />}
            footer = {<LayoutFooter />}
        >
            <Catalog products = {products}/>
        </BaseLayout>
    )
}