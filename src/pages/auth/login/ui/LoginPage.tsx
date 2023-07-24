import { FC } from 'react'

import { LayoutHeader } from '@widgets/LayoutHeader'
import { LayoutFooter } from '@shared/ui/LayoutFooter'
import { BaseLayout } from '@shared/ui/BaseLayout'


export const LoginPage: FC = () => {
    
    return (
        <BaseLayout 
            header = {<LayoutHeader />}
            footer = {<LayoutFooter />}
        >
            <div>LoginPage</div>
        </BaseLayout>
    )
}