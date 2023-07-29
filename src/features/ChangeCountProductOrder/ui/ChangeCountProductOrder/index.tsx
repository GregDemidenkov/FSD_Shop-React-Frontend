import { FC } from 'react'

import { InputNumber } from 'antd'

import { ChangeCountProductOrderProps } from '@features/ChangeCountProductOrder/model/types'
import { changeCountProductOrder } from '@features/ChangeCountProductOrder/model/changeCountProductOrderAction'
import { useAppDispatch } from '@shared/model/types'


export const ChangeCountProductOrder: FC<ChangeCountProductOrderProps> = ({
    maxCount,
    count,
    productOrderId,
    userOrderId,
    userId
}) => {
    const dispatch = useAppDispatch()

    const onChange = (value: number | null) => {
        value = value === null ? 1 : value
        const action = value > count ? "add" : "delete" 
        
        dispatch(changeCountProductOrder({
            userId: userId,
            userOrderId: userOrderId,
            productOrderId: productOrderId,
            count: value ? value : count,
            action: action
        }))
    }

    return (
        <InputNumber
            style={{width: '60px'}}
            min={1}
            max={maxCount}
            defaultValue={count}
            onChange={onChange}
        />
    )
}