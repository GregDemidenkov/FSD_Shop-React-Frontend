import { FC } from 'react'

import { Layout } from 'antd'

import { Logo } from '../Logo'
import { Container } from '@shared/ui/Container'
import { HeaderMenu } from '@features/HeaderMenu'
import { AuthMenu } from '@features/AuthMenu'

import styles from './index.module.scss'


const { Header } = Layout


export const LayoutHeader: FC = () => {
    
    return (
        <Header className = {styles.header} >
            <Container>
                <div className = {styles.content}>
                    <Logo styleList = {{marginRight: '10px'}}/>
                    <div className = {styles.menu}>
                        <HeaderMenu />
                        <AuthMenu />
                    </div>
                </div>
            </Container>
        </Header>
    )
}