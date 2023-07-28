import { FC } from 'react'

import { Alert } from 'antd'

import { MessageProps } from '@shared/model/types'


export const Message: FC<MessageProps> = ({type, text}) => {
    if (type === null) return;

    return (
        <Alert 
            message = {text}
            type={type}
        />
    )
}