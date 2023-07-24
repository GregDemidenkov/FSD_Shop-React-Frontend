import { FC } from 'react'

import { LogoProps } from '../../model/types'

import style from './index.module.scss'


export const Logo: FC<LogoProps> = ({styleList}) => {

    return (
        <h1 
            className = {style.root}
            style = {styleList}
        >
            <span>FSD</span>-React-Shop
        </h1>
    )
}