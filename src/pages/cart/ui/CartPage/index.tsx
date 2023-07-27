import { FC } from 'react'

import { Space } from 'antd'

import { EmptyCart } from '../EmptyCart'
import { EmptyCartNavigate } from '../EmptyCartNavigate'
import { useAppSelector } from '@app/store/rootStore'
import { LayoutHeader } from '@widgets/LayoutHeader'
import { LayoutFooter } from '@shared/ui/LayoutFooter'
import { BaseLayout } from '@shared/ui/BaseLayout'

import styles from './index.module.scss'


export const CartPage: FC = () => {
    const { isAuth } = useAppSelector(
        (state) => state.auth
    )

    return (
        <BaseLayout 
            header = {<LayoutHeader />}
            footer = {<LayoutFooter />}
        >
            <Space 
                direction='vertical' 
                align='center'
                size={32}
                className={styles.root}
            >
                <EmptyCart />
                <EmptyCartNavigate isAuth = {isAuth}/>
            </Space>
        </BaseLayout>
    )
}