import { FC } from 'react'

import { Button, InputNumber, Space } from 'antd'


const onChange = (value: number | null) => {
    console.log('changed', value)
}


export const AddToCart: FC = () => {
    
    return (
        <Space 
            style={{width: '100%', display: 'flex', justifyContent: 'end'}} 
            size={24}
        >
            <Button 
                type='primary' 
                style = {{textTransform: 'uppercase'}}
            >
                В корзину
            </Button>
            <InputNumber
                style={{width: '60px'}}
                min={1} 
                max={10} 
                defaultValue={1} 
                onChange={onChange} 
            />
        </Space>
    )
}