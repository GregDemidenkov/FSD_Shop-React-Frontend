import { FC } from 'react'
import { Link } from 'react-router-dom'

import { Button, Form, Input } from 'antd'
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons'

import config from '@app/routes/config'
import { RegistartionInfo } from '@features/RegistrationForm/model/types'

import styles from './index.module.scss'


const onFinish = (values: RegistartionInfo) => {
  console.log('Success:', values)
}


export const RegistrationForm: FC = () => {

    return (
        <Form
            layout='vertical'
            size='large'
            className = {styles.root}
            onFinish={onFinish}
            autoComplete="off"
        >
            <Form.Item
                name="name"
                rules={[{ required: true, message: 'Please input your Name!' }]}
                style={{marginBottom: '40px'}}
            >
                <Input 
                    prefix={<UserOutlined className="site-form-item-icon" />} 
                    type='text'
                    placeholder="Имя" 
                />
            </Form.Item>
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
                    Регистрация
                </Button>
                Есть аккаунт? <Link to = {config.login}>Войти</Link>
            </Form.Item>
        </Form>
    )
}