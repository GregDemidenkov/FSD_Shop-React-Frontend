import { FC, PropsWithChildren } from 'react'

import style from './index.module.scss'


export const Container: FC<PropsWithChildren> = ({children}) => {
    
    return (
        <div className = {style.root}>
            {children}
        </div>
    )
}