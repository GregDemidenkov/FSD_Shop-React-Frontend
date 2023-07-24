import { FC } from 'react'

import { Layout } from 'antd'

import { Container } from '../Container'
import { BaseLayoutProps } from '@shared/model/types'

import styles from './index.module.scss'


const { Content } = Layout


export const BaseLayout: FC<BaseLayoutProps> = ({header, children, footer}) => {

    return (
        <Layout>
            { header }
            <Container>
                <Content
                    className = {styles.content}>
                    { children }
                </Content>
            </Container>
            { footer }
        </Layout>
    )
}