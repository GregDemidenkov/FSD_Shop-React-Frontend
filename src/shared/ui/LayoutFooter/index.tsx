import { FC } from 'react'

import { Layout } from 'antd'


const { Footer } = Layout


export const LayoutFooter: FC = () => {

    return (
        <Footer
            style = {{
                textAlign: 'center',
                background: '#EDEDED' 
            }}
        >
            FSD-React-Shop ©2023 Created by
            <a href = "https://github.com/GregDemidenkov" target = "_blank"> podlunoy</a>
        </Footer>
    )
}