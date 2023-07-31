import { FC } from 'react'

import { Select } from 'antd'

import { setSort } from '@entities/product'
import { useAppDispatch } from '@shared/model/types'


export const SortProducts: FC = () => {
    const dispatch = useAppDispatch()

    const handleChange = (value: string) => {
        dispatch(setSort(value))
    }

    return (
        <Select
            defaultValue={"default"}
            style={{ width: 220 }}
            size='large'
            onChange={handleChange}
            options={[
                { value: "default", label: 'По умолчанию' },
                { value: 'down', label: 'По цене(⇩)' },
                { value: 'up', label: 'По цене(⇧)' },
            ]}
        />
    )
}