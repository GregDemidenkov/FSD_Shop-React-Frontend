import { FC } from 'react'

import { LayoutHeader } from '@widgets/LayoutHeader'
import { LayoutFooter } from '@shared/ui/LayoutFooter'
import { BaseLayout } from '@shared/ui/BaseLayout'


export const CatalogPage: FC = () => {

    return (
        <BaseLayout 
            header = {<LayoutHeader />}
            footer = {<LayoutFooter />}
        >
            <div>CatalogPage</div>
        </BaseLayout>
    )
}