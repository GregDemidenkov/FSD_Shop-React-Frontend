import { FC, useEffect } from 'react'

import { Layout } from 'antd'

import { Container } from '../Container'
import { auth } from '@shared/api/authAction'
import { BaseLayoutProps } from '@shared/model/types'
import { useAppDispatch } from '@shared/model/types'

import styles from './index.module.scss'


const { Content } = Layout


export const BaseLayout: FC<BaseLayoutProps> = ({header, children, footer}) => {
    const dispatch = useAppDispatch()

    useEffect(() => {
        if (localStorage.getItem('accessToken')) {
            dispatch(auth())
        }
    }, [])

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