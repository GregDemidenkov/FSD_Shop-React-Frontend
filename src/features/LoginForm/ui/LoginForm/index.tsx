import { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { Button, Form, Input } from 'antd'
import { LockOutlined, MailOutlined } from '@ant-design/icons'

import { LoginDto, login } from '@features/LoginForm'
import { Message } from '@shared/ui/Message'
import { useAppDispatch, useAppSelector } from '@shared/model/types'
import config from '@shared/routes/config'

import styles from './index.module.scss'


export const LoginForm: FC = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { message, isLoading } = useAppSelector(
        (state) => state.auth
    )

    const onFinish = (values: LoginDto) => {
        dispatch(login(values))
    }

    if(localStorage.getItem('accessToken') && !isLoading) navigate(config.catalog)

    return (
        <Form
            layout='vertical'
            size='large'
            className = {styles.root}
            onFinish={onFinish}
            autoComplete="off"
        >
            {
                message.type &&
                <Message 
                    type = {message.type}
                    text = {message.text}
                />
            }
            <p>sir.blacktiger@mail.ru</p>
            <p>lol123lol</p>
            <Form.Item
                name="email"
                rules={[{ required: true, message: 'Please input your Email!' }]}
                style={{marginBottom: '40px'}}
            >
                <Input 
                    prefix={<MailOutlined className="site-form-item-icon" />} 
                    type='email'
                    placeholder="Почта" 
                />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
                style={{marginBottom: '40px'}}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Пароль"
                />
            </Form.Item>
            <Form.Item style = {{display: 'flex', justifyContent: 'center'}}>
                <Button 
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    size='middle'
                    style = {{display: 'block', margin: '0 auto 20px', textTransform: 'uppercase'}}
                >
                    Войти
                </Button>
                Нет аккаунта? <Link to = {config.registration}>Зарегистрируйтесь</Link>
            </Form.Item>
        </Form>
    )
}