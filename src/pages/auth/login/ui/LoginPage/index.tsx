import { FC } from 'react'

import { LayoutHeader } from '@widgets/LayoutHeader'
import { LoginForm } from '@features/LoginForm/ui/LoginForm'
import { LayoutFooter } from '@shared/ui/LayoutFooter'
import { BaseLayout } from '@shared/ui/BaseLayout'
import { AuthCard } from '@shared/ui/AuthCard'


export const LoginPage: FC = () => {
    
    return (
        <BaseLayout 
            header = {<LayoutHeader />}
            footer = {<LayoutFooter />}
        >
            <div
                style={{ display: 'flex', justifyContent: 'center'}}
            >
                <AuthCard
                    title = {"Вход"}
                >
                    <LoginForm />
                </AuthCard>
            </div>
        </BaseLayout>
    )
}