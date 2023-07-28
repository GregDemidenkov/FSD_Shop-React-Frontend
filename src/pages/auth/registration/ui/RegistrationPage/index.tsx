import { FC } from 'react'

import { LayoutHeader } from '@widgets/LayoutHeader'
import { RegistrationForm } from '@features/RegistrationForm'
import { LayoutFooter } from '@shared/ui/LayoutFooter'
import { BaseLayout } from '@shared/ui/BaseLayout'
import { AuthCard } from '@shared/ui/AuthCard'


export const RegistrationPage: FC = () => {

    return (
        <BaseLayout 
            header = {<LayoutHeader />}
            footer = {<LayoutFooter />}
        >
            <div 
                style={{ display: 'flex', justifyContent: 'center'}}
            >
                <AuthCard
                    title = {"Регистрация"}
                >
                    <RegistrationForm />
                </AuthCard>
            </div>
        </BaseLayout>
    )
}