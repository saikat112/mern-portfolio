import React from 'react'
import { Form, Input } from 'antd';

function AdminIntro() {
  const onFinish = (values) => {
    console.log(values)
  }
  return (
    <div>
      <Form onFinish={onFinish}>
        <Form.Item name='welcomeText'>
          <input placeholder='Welcome Text' />
        </Form.Item>
        <Form.Item name='fastName'>
          <input placeholder='Fast Name' />
        </Form.Item>
        <Form.Item name='lastName'>
          <input placeholder='Last Name' />
        </Form.Item>
        <Form.Item name='caption'>
          <input placeholder='Captions' />
        </Form.Item>
        <Form.Item name='description'>
          <textarea placeholder='Description' />
        </Form.Item>
        <div className="flex justify-end w-full">
          <button className='px-10 py-2 bg-primary text-white'>Save</button>
        </div>
      </Form>
    </div>
  )
}

export default AdminIntro;
