import { FC } from 'react'

import Card from 'antd/es/card/Card'

import { AuthCardProps } from '@shared/model/types'


export const AuthCard: FC<AuthCardProps> = ({children, title}) => {

    return (
        <Card
            title={title}
            headStyle={{textAlign: 'center', fontSize: 'large'}}
            bordered={true}
            hoverable={true}
        >
            { children }
        </Card>
    )
}