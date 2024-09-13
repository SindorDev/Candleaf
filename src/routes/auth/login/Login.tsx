import type { FormProps } from 'antd';
import { Button, Form, Input, message } from 'antd';
import { Link, useNavigate } from 'react-router-dom';
import { useLoginMutation } from '../../../redux/api/user-api';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../../redux/slice/authSlice';

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};


const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [login, {isLoading, isSuccess, data}] = useLoginMutation()

  const onFinish: FormProps<FieldType>['onFinish'] = (values) => {
    login(values as any)
  };

  useEffect(() => {
    if(isSuccess && data.token) {
      dispatch(loginUser(data.token))
      message.success("Login Success")
      navigate("/")
    }
  }, [isSuccess, data])
  
  
  const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };


  return (
    
<div className='w-full h-screen flex items-center justify-center'>
    <div className='w-full max-w-[400px] bg-white  rounded-md shadow-cm p-10'>
      <h1 className='text-center text-2xl font-bold'>Login</h1>
    <Form
    name="basic"
    layout='vertical'
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item wrapperCol={{ span: 24 }}>
      <Button disabled={isLoading} loading={isLoading} type="primary" htmlType="submit" className='w-full'>
        Submit
      </Button>
    </Form.Item>
  </Form>
  <p className='text-center text-sm'>Don't have an account? <Link className='text-blue-500' to='/auth/register'>Register</Link></p>
    </div>
  </div>
  )
};

export default Login;