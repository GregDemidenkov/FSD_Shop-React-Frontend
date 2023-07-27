import { FC } from 'react'

import { Space } from 'antd'
import { FrownOutlined } from '@ant-design/icons'

import styles from './index.module.scss'


export const EmptyCart: FC = () => {

    return (
        <Space direction='vertical' align='center'>
            <FrownOutlined 
                style={{
                    fontSize: '100px',
                    color: '#00152A'
                }}
            />
            <p 
                className={styles.title}
            >
                Ваша корзина пуста
            </p>
        </Space>
    )
}