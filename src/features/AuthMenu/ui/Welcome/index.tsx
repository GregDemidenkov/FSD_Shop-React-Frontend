import { FC } from 'react'

import { WelcomeProps } from '@features/AuthMenu'

import styles from './index.module.scss'


export const Welcome: FC<WelcomeProps> = ({name}) => {

    return (
        <p className = {styles.root}>Welcome! {name}</p>
    )
}