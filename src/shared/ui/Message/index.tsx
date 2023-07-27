import { FC } from 'react'

import { Alert } from 'antd'

import { MessageProps } from '@shared/model/types'


export const Message: FC<MessageProps> = ({type, text}) => {

    return (
        <Alert 
            message = {text}
            type={type === 'success' ? 'success' : 'error'}
        />
    )
}