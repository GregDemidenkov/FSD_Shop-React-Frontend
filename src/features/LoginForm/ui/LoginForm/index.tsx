import { FC } from 'react'
import { Link } from 'react-router-dom'

import { Button, Form, Input } from 'antd'
import { LockOutlined, MailOutlined } from '@ant-design/icons'

import config from '@app/routes/config'
import { LoginInfo } from '@features/LoginForm/model/types'

import styles from './index.module.scss'


const onFinish = (values: LoginInfo) => {
  console.log('Success:', values)
}


export const LoginForm: FC = () => {

    return (
        <Form
            layout='vertical'
            size='large'
            className = {styles.root}
            onFinish={onFinish}
            autoComplete="off"
        >
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